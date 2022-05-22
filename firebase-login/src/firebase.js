import {useState,useEffect} from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCEHRsRhLY2JorVTVvkzlIbcitk_ehPMs",
  authDomain: "form-e7ef3.firebaseapp.com",
  projectId: "form-e7ef3",
  storageBucket: "form-e7ef3.appspot.com",
  messagingSenderId: "906111687033",
  appId: "1:906111687033:web:6934fedb0a6bfb1c4cf7a8",
  measurementId: "G-1Z89R7ZCP0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// 로그인한사람 정보
export function useAuth() {
    const [ currentUser, setCurrentUser ] = useState(); 
    useEffect(() => {
        const unsub = onAuthStateChanged(auth,user => setCurrentUser(user));
        return unsub;
    }, [])
    return currentUser
}

export function logout(){
    return signOut(auth);
}