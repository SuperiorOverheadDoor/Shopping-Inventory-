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
  databaseURL: "https://home-inventory-cdddd-default-rtdb.firebaseio.com",
  projectId: "home-inventory-cdddd",
  storageBucket: "home-inventory-cdddd.firebasestorage.app",
  messagingSenderId: "838196847784",
  appId: "1:838196847784:web:80f416753ad0c285a90e9d",
  measurementId: "G-8HD3XMQCSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// Paste the config object from Firebase Console → Project settings → Your apps → SDK setup.
// This file is safe to commit publicly — these are client identifiers, not secrets.
// Access is actually controlled by firestore.rules, not by hiding this file.
//window.FIREBASE_CONFIG = {
  //apiKey: "PASTE_YOUR_API_KEY",
  //authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  //projectId: "PASTE_YOUR_PROJECT_ID",
  //storageBucket: "PASTE_YOUR_PROJECT.appspot.com",
  //messagingSenderId: "PASTE_YOUR_SENDER_ID",
  //appId: "PASTE_YOUR_APP_ID"
//};
