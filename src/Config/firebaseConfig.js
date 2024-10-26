// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD30d6ls1stW-BtdCgucRLkKoQF0FxS2mw",
    authDomain: "click-store-ecommerce.firebaseapp.com",
    projectId: "click-store-ecommerce",
    storageBucket: "click-store-ecommerce.appspot.com",
    messagingSenderId: "421203679307",
    appId: "1:421203679307:web:e37b72a2adc8741fb8d5ce",
    measurementId: "G-91BF6300ZL"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export { auth, provider };

// Login function
export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};