
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyCnaey0IBdk4S3DTkTNP2xG1vcbItbqZqk",
  authDomain: "conversify-22819.firebaseapp.com",
  projectId: "conversify-22819",
  storageBucket: "conversify-22819.appspot.com",
  messagingSenderId: "516395272421",
  appId: "1:516395272421:web:bda23d4e76a53880c52c0c",
  measurementId: "G-FM9SV4KED5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()