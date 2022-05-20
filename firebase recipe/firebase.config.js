import { initializeApp } from "firebase/app";
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


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db }