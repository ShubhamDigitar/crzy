// app/firebase/config.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwm0PRt78PdbSev7m_semXkNio7FLF9xI",
  authDomain: "crazyoffers-79860.firebaseapp.com",
  projectId: "crazyoffers-79860",
  storageBucket: "crazyoffers-79860.firebasestorage.app",
  messagingSenderId: "706369992248",
  appId: "1:706369992248:web:02e8b111a631a6e74f18cd",
  measurementId: "G-EGX8VWJSF3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };