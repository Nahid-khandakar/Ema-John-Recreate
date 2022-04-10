// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1tQe9g0HFl80-iNeV9t6gCzaYwiLN4H8",
    authDomain: "ema-john-7b966.firebaseapp.com",
    projectId: "ema-john-7b966",
    storageBucket: "ema-john-7b966.appspot.com",
    messagingSenderId: "160133929508",
    appId: "1:160133929508:web:002aaab0bf458fa2fad6b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export default app

const auth = getAuth(app);

export default auth;