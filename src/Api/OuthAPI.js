import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged  } from "firebase/auth";



const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_API_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
};

const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export function Outhlogin() {
  signInWithPopup(auth, provider).catch(console.error);
}


export function Outhlogout() {
  signOut(auth).catch(console.error);
}


export function onUserStateChange(callback){
    onAuthStateChanged(auth, (user) => {
        callback(user);
      });

}






