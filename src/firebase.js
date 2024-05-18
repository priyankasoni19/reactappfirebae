
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.AY,
    authDomain: process.env.AN,
    databaseURL: process.env.DL,
    projectId: process.env.PD,
    storageBucket: process.env.ST,
    messagingSenderId: process.env.MD,
    appId: process.env.AD
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db }
