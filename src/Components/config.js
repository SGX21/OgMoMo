
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCptUjR0osYogFpPiE778MfNptkqgnLwhc",
  authDomain: "deal-d0c90.firebaseapp.com",
  projectId: "deal-d0c90",
  storageBucket: "deal-d0c90.appspot.com",
  messagingSenderId: "785435305155",
  appId: "1:785435305155:web:03234a99a626d124b0ee76",
  measurementId: "G-5MDG4BEQBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}