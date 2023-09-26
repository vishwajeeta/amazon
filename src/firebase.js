//import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCCdecmdV4vWkNzJY9yibsqAM5mYcqzR6g",
  authDomain: "handy-sensor-284801.firebaseapp.com",
  projectId: "handy-sensor-284801",
  storageBucket: "handy-sensor-284801.appspot.com",
  messagingSenderId: "387244138315",
  appId: "1:387244138315:web:b7dbecf7b8100c9ed612ce",
  measurementId: "G-GRMBB16MTH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
 
export {db, auth};