// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD79NraRDxO56FQbPbs5KNU5ocTnaNCDh8",
  authDomain: "netflix-clone-a4790.firebaseapp.com",
  projectId: "netflix-clone-a4790",
  storageBucket: "netflix-clone-a4790.appspot.com",
  messagingSenderId: "227104479739",
  appId: "1:227104479739:web:63008f9551e214d28c935e",
  measurementId:"G-Q22GK43J5D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)