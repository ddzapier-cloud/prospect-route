import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  

const firebaseConfig = {
  apiKey: "AIzaSyCLaXSVU_HIG2TvS-LP68UTkaYybF4NZDI",
  authDomain: "prospect-route.firebaseapp.com",
  projectId: "prospect-route",
  storageBucket: "prospect-route.firebasestorage.app",
  messagingSenderId: "175179224985",
  appId: "1:175179224985:web:2b3ea0e3ee079219a4e508",
  measurementId: "G-Q6BFBFQYXX" 
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  // Authentication export kar rahe hain