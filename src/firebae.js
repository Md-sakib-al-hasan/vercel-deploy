// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Correct import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOoAT9qSk-_AVAMrdMokHhg7_wvXoSvpo",
  authDomain: "ecommerce-1e81c.firebaseapp.com",
  projectId: "ecommerce-1e81c",
  storageBucket: "ecommerce-1e81c.appspot.com",
  messagingSenderId: "228926666670",
  appId: "1:228926666670:web:638bc09898004c3b7e3a3f",
  measurementId: "G-ZRG5JELMXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
