// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBiCY1trXhZbt3yY6u-t1um7rVK_sSegs",
  authDomain: "al-amira-bbb72.firebaseapp.com",
  projectId: "al-amira-bbb72",
  storageBucket: "al-amira-bbb72.firebasestorage.app",
  messagingSenderId: "407937722391",
  appId: "1:407937722391:web:68113139607c1e42991452",
  measurementId: "G-GFYXMM6FT5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
