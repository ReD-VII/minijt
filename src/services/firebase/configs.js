import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  // apiKey: "AIzaSyDtalNWTdAIWdGV_2p5t2zz6g__z2GcSqc",
  // authDomain: "new-mini-blog.firebaseapp.com",
  // projectId: "new-mini-blog",
  // storageBucket: "new-mini-blog.appspot.com",
  // messagingSenderId: "238472190628",
  // appId: "1:238472190628:web:6744b2530ee8b51c8f6431"

  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_API_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_API_PROJECT_ID,
  storageBucket: process.env.REACT_APP_API_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_API_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_API_APP_ID

  



};;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }