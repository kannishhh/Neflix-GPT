// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "netflix-gpt-5e345.firebaseapp.com",
  projectId: "netflix-gpt-5e345",
  storageBucket: "netflix-gpt-5e345.firebasestorage.app",
  messagingSenderId: "807743130377",
  appId: "1:807743130377:web:47c33bea6bc65f989d61d8",
  measurementId: "G-RLLDJ4CVGF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
