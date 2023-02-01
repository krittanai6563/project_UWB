import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
    
const firebaseConfig = {
  apiKey: "AIzaSyC2l21YBFXUdqz61ukwaRXcEynt7t32C30",
  authDomain: "projectuwb-27b59.firebaseapp.com",
  projectId: "projectuwb-27b59",
  storageBucket: "projectuwb-27b59.appspot.com",
  messagingSenderId: "436204132556",
  appId: "1:436204132556:web:045ca6a919b9f886454a69",
  measurementId: "G-574YC9RVV3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const productCollection = db.ref("Name/position");

export default firebase;