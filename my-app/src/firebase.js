// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz90mHNwcqm5zUhkKVldN6TAT67Bagwkk",
  authDomain: "react-authentication-b4d50.firebaseapp.com",
  projectId: "react-authentication-b4d50",
  storageBucket: "react-authentication-b4d50.appspot.com",
  messagingSenderId: "693895181834",
  appId: "1:693895181834:web:1137232a6b93a475a191f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;