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

export async function Outhlogin() {
    
    return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      return user;
      // ...
    }).catch(console.error);
}


export async function Outhlogout() {
    
return signOut(auth).then(() => null)
}


export function onUserStateChange(callback){
    onAuthStateChanged(auth, (user) => {
        callback(user);
      });

}






