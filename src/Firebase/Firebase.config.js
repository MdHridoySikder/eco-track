// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdBhH4cRNncCtwnf4NiHFKHBB-KU8eBvQ",
  authDomain: "eco-track-f805b.firebaseapp.com",
  projectId: "eco-track-f805b",
  storageBucket: "eco-track-f805b.firebasestorage.app",
  messagingSenderId: "764255940436",
  appId: "1:764255940436:web:fab3f15a4c289cd33422c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
