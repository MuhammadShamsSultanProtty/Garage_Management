// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebaseconfig";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

const initilizeFirebase = () => {
    initializeApp(firebaseConfig);
}


export default initilizeFirebase;