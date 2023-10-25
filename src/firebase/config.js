// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd-qcknCpMdB65vYQir_zxJX8UVrLWX2M",
  authDomain: "herbox-60191.firebaseapp.com",
  projectId: "herbox-60191",
  storageBucket: "herbox-60191.appspot.com",
  messagingSenderId: "249363281637",
  appId: "1:249363281637:web:a6b1fdca1d11a825e9060c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);