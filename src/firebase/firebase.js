import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCUf0OEantGI5_W-X3o7ms51B_mNMEhz1E",
  authDomain: "vasiti-e1117.firebaseapp.com",
  projectId: "vasiti-e1117",
  storageBucket: "vasiti-e1117.appspot.com",
  messagingSenderId: "745217618729",
  appId: "1:745217618729:web:4cbaa5e1c642665b253d38",
  measurementId: "G-RFF1N1FM8Y",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
