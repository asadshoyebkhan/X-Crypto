// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWWxRVfIdto-26OOZUs0b-c9aGFXeVlvs",
  authDomain: "x-crypto-a5a12.firebaseapp.com",
  projectId: "x-crypto-a5a12",
  storageBucket: "x-crypto-a5a12.appspot.com",
  messagingSenderId: "606153753569",
  appId: "1:606153753569:web:c4aa41285dc65beaea48a0",
  measurementId: "G-PNNLSL3EEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};