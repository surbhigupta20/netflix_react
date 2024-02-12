// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn9-ikI4_7vKSrYj3b_On1vlFQEFm-5h8",
  authDomain: "netflixgpt-35b0a.firebaseapp.com",
  projectId: "netflixgpt-35b0a",
  storageBucket: "netflixgpt-35b0a.appspot.com",
  messagingSenderId: "464037553033",
  appId: "1:464037553033:web:04ffed63bc92cca3fa7758",
  measurementId: "G-C51WBX01L4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
