// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdAEPxRKN0ssG1BQIHpoYYyg380pqUmOA",
  authDomain: "facebook-helpdesk-f7c49.firebaseapp.com",
  projectId: "facebook-helpdesk-f7c49",
  storageBucket: "facebook-helpdesk-f7c49.appspot.com",
  messagingSenderId: "592432055135",
  appId: "1:592432055135:web:561ca3af9507409eafecea",
  measurementId: "G-EX7QVFMB0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const authentication = getAuth(app)