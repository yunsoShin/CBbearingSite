import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider , signOut , onAuthStateChanged} from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
import {v4 as uuid} from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login(){
  signInWithPopup(auth, provider).catch(console.error);
} 


export function logout(){
  signOut(auth)
  
} 

export function onUserStateChange(callback){
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;

    callback(updatedUser);
  });
}

async function adminUser(user){
  return get(ref(database,'admins'))
  .then((snapshot)=>{
    if(snapshot.exists()) {
      const admins=snapshot.val();
      const isAdmin = admins.includes(user.uid);
      return{...user,isAdmin};
    }
    return user;
  })
}

export async function addNewProduct(product,image){
  const id=uuid();
  return set(ref(database,`products/${id}`),{
    ...product,
    id,
    image,
    option: product.options ? product.options.split(',') : [],
  });
}





/*export function Outhlogin() {
  signInWithPopup(auth, provider).catch(console.error);
}


export function Outhlogout() {
  signOut(auth).catch(console.error);
}


export function onUserStateChange(callback) {
    callback();
}

*/

