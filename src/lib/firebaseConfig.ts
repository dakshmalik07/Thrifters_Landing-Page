
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSkOmuRrnkxacFGDzndXebi6qBnaf6ne8",
  authDomain: "landingpage-88493.firebaseapp.com",
  projectId: "landingpage-88493",
  storageBucket: "landingpage-88493.firebasestorage.app",
  messagingSenderId: "103290940331",
  appId: "1:103290940331:web:82d4add84712c5d95000ee",
  measurementId: "G-SPFQ9C07XK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};