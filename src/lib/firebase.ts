// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD70fVI8L7hgiL6RJAbPEbPHcOhDrxCPwA",
  authDomain: "scale-with-olaiya.firebaseapp.com",
  projectId: "scale-with-olaiya",
  storageBucket: "scale-with-olaiya.appspot.com",
  messagingSenderId: "884511123171",
  appId: "1:884511123171:web:ef7da1503667e0cdcf07d6",
  measurementId: "G-TR08XPQYSG"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
