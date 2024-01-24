// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx8sSHeyKqKIkLVdAuXEwC2B1XQMkJ6L4",
  authDomain: "todo-app-bbf10.firebaseapp.com",
  projectId: "todo-app-bbf10",
  storageBucket: "todo-app-bbf10.appspot.com",
  messagingSenderId: "898631711389",
  appId: "1:898631711389:web:7f082fbaf2fafd3c247274",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
