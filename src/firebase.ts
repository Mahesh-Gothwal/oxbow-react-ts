
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDl1OawLdaXv66yantK2Sede7fBZ-u_9QE",
  authDomain: "oxbow-creatives.firebaseapp.com",
  projectId: "oxbow-creatives",
  storageBucket: "oxbow-creatives.firebasestorage.app",
  messagingSenderId: "1087780141414",
  appId: "1:1087780141414:web:579df01b23c91162f570a7",
  measurementId: "G-RN2HMLBB3H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app); 
