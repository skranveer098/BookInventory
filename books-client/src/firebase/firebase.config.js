// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChPUcNZKEygmY1enarljygP1SATWgkXr0",
  authDomain: "book-inventory-bb8cd.firebaseapp.com",
  projectId: "book-inventory-bb8cd",
  storageBucket: "book-inventory-bb8cd.appspot.com",
  messagingSenderId: "616697558116",
  appId: "1:616697558116:web:02ec3f3447dc1bd60d5b71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;