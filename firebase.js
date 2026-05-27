// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9wfPo2JpMOxHUrYwBm0IFMerXnb0tTek",
  authDomain: "medical-survey-bc426.firebaseapp.com",
  projectId: "medical-survey-bc426",
  storageBucket: "medical-survey-bc426.firebasestorage.app",
  messagingSenderId: "161171763373",
  appId: "1:161171763373:web:c01527b76a400f12209624",
  measurementId: "G-LRTYL8F10V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);