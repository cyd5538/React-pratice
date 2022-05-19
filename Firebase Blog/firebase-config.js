
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
 
const firebaseConfig = {
  apiKey: "AIzaSyB3lP6JWo93YYwFrqN1zdOiPju-C0Y2JL8",
  authDomain: "blog-ea5ab.firebaseapp.com",
  projectId: "blog-ea5ab",
  storageBucket: "blog-ea5ab.appspot.com",
  messagingSenderId: "1069760221601",
  appId: "1:1069760221601:web:7aeb9c67994a63c74dbbe0",
  measurementId: "G-ZFJG34CS2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();