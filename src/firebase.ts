// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQrIt2KVVkizUzA3eBYVV9ZsrSTAX0F1E",
    authDomain: "happy-erasmus-zaragoza.firebaseapp.com",
    projectId: "happy-erasmus-zaragoza",
    storageBucket: "happy-erasmus-zaragoza.appspot.com",
    messagingSenderId: "824771517666",
    appId: "1:824771517666:web:ae8a05685cba37f1f552bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

export const auth = getAuth(app);