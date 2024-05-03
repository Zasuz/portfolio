// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// import firebase from "firebase/compat";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAa3obHa8-nXHPRhoveAzMRdF9bzm4IdG4",
    authDomain: "test-firebase-6dc21.firebaseapp.com",
    projectId: "test-firebase-6dc21",
    storageBucket: "test-firebase-6dc21.appspot.com",
    messagingSenderId: "183065726197",
    appId: "1:183065726197:web:0f084add24c7cb56b649bc",
    measurementId: "G-FQ8P4HR62C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
let storage = getStorage(app);

export default storage;

