// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMDAsszhEJvZZ-Rr1Nn7Yx8BGc7B_aOso",
  authDomain: "ema-john-simple-ceb6e.firebaseapp.com",
  projectId: "ema-john-simple-ceb6e",
  storageBucket: "ema-john-simple-ceb6e.appspot.com",
  messagingSenderId: "629694794904",
  appId: "1:629694794904:web:eab1ffddfc3c817dcfd4ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;