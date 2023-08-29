import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBs4-1KdtY1xaXLOe6QMagHLNwMSu03wL0",
  authDomain: "quiz-740fb.firebaseapp.com",
  projectId: "quiz-740fb",
  storageBucket: "quiz-740fb.appspot.com",
  messagingSenderId: "510220594975",
  appId: "1:510220594975:web:6b9d0299a46d12fdbc4a2a",
  measurementId: "G-LPCS4J0PYY",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export default firestore;
