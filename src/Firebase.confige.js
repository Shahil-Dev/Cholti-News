// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU9S3qhbST0tMNbaw3P_QeKBaNJZb8NdQ",
  authDomain: "cholti-news.firebaseapp.com",
  projectId: "cholti-news",
  storageBucket: "cholti-news.firebasestorage.app",
  messagingSenderId: "494613509408",
  appId: "1:494613509408:web:cb2f3ab44652ac5ee1d345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth