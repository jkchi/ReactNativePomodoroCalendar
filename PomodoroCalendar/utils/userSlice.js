import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import firebaseConfig from "../secret";

import { getAuth, signInWithEmailAndPassword, 
  signOut as fbSignOut, createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';

import { getFirestore, collection, query,
         doc, getDocs, updateDoc, addDoc, deleteDoc,
         where,getDoc
} from "firebase/firestore";

import { getApps,initializeApp } from "firebase/app";

let app;
const apps = getApps();

if (apps.length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = apps[0];
}

const db = getFirestore(app);
const auth = getAuth(app);

// the following code is left for learning reason
// notice thunk arg is a single obj

// dispatch a thunk will always return a primose (it is always resolved)
// dispatch a action will return the action itself

// using rejectWithValue will move the error attribute of the promise
// the the playload attribute, for direct access 
// export const signIn = createAsyncThunk(
//   'user/signIn',
//   async ({email,password},thunkAPI) => {

//     try{
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       return {userData : userCredential.user};
//     }
//     catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }

//   }

// )

const parseUser = (user) =>{
  return {userData : {
    email: user.email,
    displayName: user.displayName,
    uid:user.uid,
  }};
}

export const signIn = createAsyncThunk(
    'user/signIn',
    async ({email,password}) => {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user
      return parseUser(user);
    }
  )

export const signOut = createAsyncThunk(
    'user/signOut',
    async () => {
      await fbSignOut(auth);
    }
  )

export const signUp = createAsyncThunk(
  'user/signUp',
  async ({name, email,password}) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    let user = userCredential.user;
    
    await updateProfile(user, {
      displayName: name,
    });

    user = auth.currentUser;
    return parseUser(user);
  }
)

export const addEvent = createAsyncThunk(
  'user/addEvent',
  async (newEvent, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const uid = state.user.userData?.uid;

      const eventsRef = collection(db, 'Events');
      const eventsSnap = await addDoc(eventsRef, { ...newEvent, uid });

      const newEventWithId = { ...newEvent, id: eventsSnap.id };
      return newEventWithId;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteEvent = createAsyncThunk(
  'user/deleteEvent',
  async (eventId, thunkAPI) => {
    try {
      const eventRef = doc(db, 'Events', eventId);
      await deleteDoc(eventRef);
      return eventId;
      
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editEvent = createAsyncThunk(
  'user/editEvent',
  async (updatedEvent, thunkAPI) => {
    try {
      const eventRef = doc(db, 'Events', updatedEvent.id);
      const eventSnap = await getDoc(eventRef);
      const pastDuration = eventSnap.data().focusDuration
      const focusDuration = pastDuration + updatedEvent.focusDuration
      await updateDoc(eventRef, { ...updatedEvent , focusDuration});

      return updatedEvent ; 
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchEvents = createAsyncThunk(
  'user/fetchEvents',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const uid = state.user.userData?.uid;
      const eventsRef = collection(db, 'Events');
      const q = query(eventsRef, where('uid', '==', uid));
      const querySnapshot = await getDocs(q);

      const events = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));

      return events;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const userSlice = createSlice({
  name:"user",

  initialState: {
    isAuthenticated: false,
    userData: null,
    events:[],
  },

  reducers:{
  },

  // return a method
  extraReducers:(builder) => {
    
    builder.addCase(signIn.fulfilled, 
      (state, action) => {
        state.isAuthenticated = true;
        state.userData = action.payload.userData;
      }
    )
    
    builder.addCase(signOut.fulfilled, 
      (state) => {
        state.isAuthenticated = false;
        state.userData = null;
      }
    )

    builder.addCase(signUp.fulfilled, 
      (state, action) => {
        state.isAuthenticated = true;
        state.userData = action.payload.userData;
      }
    )
  
    builder.addCase(addEvent.fulfilled, (state, action) => {
      const newEvent = action.payload;
      state.events.push(newEvent);
    })

    builder.addCase(deleteEvent.fulfilled, (state, action) => {
      const id = action.payload;
      state.events = state.events.filter(elem=>elem.id !== id);
    })

    builder.addCase(editEvent.fulfilled, (state, action) => {
      const updatedEvent = action.payload;
      const index = state.events.findIndex(event => event.id === updatedEvent.id);
    
      if (index !== -1) {
        const prevEvent = state.events[index];
    
        state.events[index] = {
          ...prevEvent, 
          ...updatedEvent, 
          focusDuration: prevEvent.focusDuration + updatedEvent.focusDuration, 
        };
      }
    });

    builder.addCase(fetchEvents .fulfilled, (state, action) => {
      state.events = action.payload
    })

  }

})

export default userSlice.reducer