// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh8Q63GL6Mzm8d1lUDritHFlxS8dQoJMc",
  authDomain: "dwellics-realestate.firebaseapp.com",
  projectId: "dwellics-realestate",
  storageBucket: "dwellics-realestate.appspot.com",
  messagingSenderId: "533095854317",
  appId: "1:533095854317:web:dfc3e3aca5d9b545ee1ce4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
