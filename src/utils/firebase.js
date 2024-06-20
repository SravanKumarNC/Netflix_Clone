// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ1bRmX1wYUxag4ggKZ90vWhQCfGBO5eY",
  authDomain: "netflixclone-7578d.firebaseapp.com",
  projectId: "netflixclone-7578d",
  storageBucket: "netflixclone-7578d.appspot.com",
  messagingSenderId: "302908127919",
  appId: "1:302908127919:web:eb2fd694c6bcaf7b0eb25a",
  measurementId: "G-YVLP5R87DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);