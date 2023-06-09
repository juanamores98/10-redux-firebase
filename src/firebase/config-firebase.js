import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA63JVFbWFicvw3xWBlNrZcVA0PrkQl348',
  authDomain: 'redux-firebase-209d4.firebaseapp.com',
  projectId: 'redux-firebase-209d4',
  storageBucket: 'redux-firebase-209d4.appspot.com',
  messagingSenderId: '453471246323',
  appId: '1:453471246323:web:4325afb0ba602803e36486',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Initialize Auth
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
