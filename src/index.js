import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: {key:process.env.REACT_API_FIREBASE_KEY},
  authDomain: "yunshop-d4eac.firebaseapp.com",
  databaseURL: {key:process.env.REACT_API_FIREBASE_URL},
  projectId: "yunshop-d4eac",
  storageBucket: "yunshop-d4eac.appspot.com",
  messagingSenderId: "981208767944",
  appId: {key: process.env.REACT_API_FIREBASE_APPID},
  measurementId: "G-XK55WBYYF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
