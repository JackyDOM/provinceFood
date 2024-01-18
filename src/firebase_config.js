// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxBblvSPP5bd-TpmplOZrn0DROAy80qSo",
  authDomain: "province-food.firebaseapp.com",
  projectId: "province-food",
  storageBucket: "province-food.appspot.com",
  messagingSenderId: "292829479038",
  appId: "1:292829479038:web:c6f0d2c7653a101969582f",
  measurementId: "G-3KDCDNE3N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);