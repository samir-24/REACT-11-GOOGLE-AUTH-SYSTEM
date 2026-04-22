import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaulYnVOBUP6_ghdRlgo3cCnQTZSs6FHI",
  authDomain: "auth-system-b75b5.firebaseapp.com",
  projectId: "auth-system-b75b5",
  storageBucket: "auth-system-b75b5.firebasestorage.app",
  messagingSenderId: "308687665731",
  appId: "1:308687665731:web:70b6f041319517ede072f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);