import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBCzEDdnw108hQ-zn87lC7qFcmBw9z11Yg",
  authDomain: "netflix-react-e7556.firebaseapp.com",
  projectId: "netflix-react-e7556",
  storageBucket: "netflix-react-e7556.appspot.com",
  messagingSenderId: "615145345180",
  appId: "1:615145345180:web:8336c77fae7703d611dd59"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);