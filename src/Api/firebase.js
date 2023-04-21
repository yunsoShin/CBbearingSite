import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider , signOut , onAuthStateChanged} from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
import {v4 as uuid} from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);



export function loginGoogle(){
  signInWithPopup(auth, provider).catch(console.error);
}  


export function logoutGoogle(){
  signOut(auth)
  
} 

export function onUserStateChange(callback){
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;

    callback(updatedUser);
  });
}

function adminUser(user){
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

export async function addNewProduct(product,image=''){
  const id=uuid();
  return set(ref(database,`products/${id}`),{
    ...product,
    id,
    image,
    option: product.options ? product.options.split(',') : [],
  });
}

export async function getProducts(){
  return get(ref(database,'products')).then((snapshot)=>{
        if(snapshot.exists()) {
          return Object.values(snapshot.val());
        }
        return [];
      })
}
export async function handleDelete(id) {
  const itemRef = ref(database, `products/${id}`);
  return set(itemRef, null)
    .then(() => {
      console.log('Data deleted successfully');
    })
    .catch((error) => {
      console.error('Data deletion failed:', error);
    });
}



export async function addNewQuestion(question){
  const id=uuid();
  return set(ref(database,`questions/${id}`),{
    ...question,
    id,
  });
}

export function getQuestion(){
  return get(ref(database,'questions')).then((snapshot)=>{
        if(snapshot.exists()) {
          return Object.values(snapshot.val());
        }
        return [];
      })
    }
