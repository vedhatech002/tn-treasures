// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYjLh1UakCQTL47mp9iM6dlGGVBwWrKP4",
  authDomain: "tn-treasures.firebaseapp.com",
  projectId: "tn-treasures",
  storageBucket: "tn-treasures.appspot.com",
  messagingSenderId: "21118692288",
  appId: "1:21118692288:web:a9fe44cae6d5fdc806b625",
  measurementId: "G-V9ZYXX5KW9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// console.log(app);
// console.log(import.meta.env);
// console.log(db);
export default db;
