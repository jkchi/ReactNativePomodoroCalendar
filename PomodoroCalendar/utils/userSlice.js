import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import firebaseConfig from "../secret";

import { getAuth, signInWithEmailAndPassword, 
  signOut as fbSignOut, createUserWithEmailAndPassword
} from 'firebase/auth';

import { getFirestore, collection, query,
  doc, getDocs, updateDoc, addDoc, deleteDoc,
} from "firebase/firestore";

import { getApps,initializeApp } from "firebase/app";

let app;
const apps = getApps();

if (apps.length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = apps[0];
}

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
    async ({email,password}) => {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user
      return parseUser(user);
    }
  )

export const userSlice = createSlice({
  name:"user",

  initialState: {
    isAuthenticated: false,
    userData: null
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
  }

})

export default userSlice.reducer