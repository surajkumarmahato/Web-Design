// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACn-_iynEndG0FTfz6o3EYMJA3VDmGa10",
  authDomain: "urmichand-d8d23.firebaseapp.com",
  projectId: "urmichand-d8d23",
  storageBucket: "urmichand-d8d23.firebasestorage.app",
  messagingSenderId: "801745192473",
  appId: "1:801745192473:web:eabb81b4024854d9428c88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { app, db };
