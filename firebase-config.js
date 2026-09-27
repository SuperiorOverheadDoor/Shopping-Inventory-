// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFI-ipnPyZtALXowxEiUwcg8m2znr70rY",
  authDomain: "home-inventory-cdddd.firebaseapp.com",
  projectId: "home-inventory-cdddd",
  storageBucket: "home-inventory-cdddd.firebasestorage.app",
  messagingSenderId: "838196847784",
  appId: "1:838196847784:web:80f416753ad0c285a90e9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);