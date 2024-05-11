// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYKvCJZUdvYfCi_eMDOniBQrDTkjj0Lxw",
    authDomain: "coder-207bd.firebaseapp.com",
    databaseURL: "https://coder-207bd-default-rtdb.firebaseio.com",
    projectId: "coder-207bd",
    storageBucket: "coder-207bd.appspot.com",
    messagingSenderId: "522882637394",
    appId: "1:522882637394:web:2206102031c914ff73498b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db }
