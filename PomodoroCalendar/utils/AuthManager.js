import { getAuth, signInWithEmailAndPassword, 
         signOut as fbSignOut, createUserWithEmailAndPassword
} from 'firebase/auth';
import { getApps, initializeApp } from 'firebase/app';
import firebaseConfig from '../secret';

let app, auth;
// this guards against initializing more than one "App"
const apps = getApps();
if (apps.length == 0) { 
  app = initializeApp(firebaseConfig);
} else {
  app = apps[0];
}
auth = getAuth(app);


const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
}


const signOut = async () => {
  await fbSignOut(auth);
}


const signUp = async (email, password) => {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
}

export { signIn,signOut,signUp }