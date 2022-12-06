// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyB9uAkrVHqK-ECecWxbRR5Q9ubNKuNY0t4",
  authDomain: "continental-computers.firebaseapp.com",
  projectId: "continental-computers",
  storageBucket: "continental-computers.appspot.com",
  messagingSenderId: "663183118774",
  appId: "1:663183118774:web:362f5d6a0ac6b7884ab117",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
