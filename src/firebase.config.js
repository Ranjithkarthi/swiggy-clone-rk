// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTAYzxLwd2KuC6a1zOVGNN9lQJQDU732s",
  authDomain: "otp-login-f4514.firebaseapp.com",
  projectId: "otp-login-f4514",
  storageBucket: "otp-login-f4514.appspot.com",
  messagingSenderId: "842960638651",
  appId: "1:842960638651:web:add9e798fa46a24588cf9e",
  measurementId: "G-M48SMZVRXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;