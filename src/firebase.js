// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth,GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbNEUyfpEtp_wB6i9-ZNqc2XxkTYyIu1c",
  authDomain: "blogpost-db972.firebaseapp.com",
  projectId: "blogpost-db972",
  storageBucket: "blogpost-db972.appspot.com",
  messagingSenderId: "920620723855",
  appId: "1:920620723855:web:1435f92b7ffeead9794afa",
  measurementId: "G-YSFCF47J2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export const google=new GoogleAuthProvider();
