import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC_bZz4C8ZpGPFD4mxqsplxTlTJQaxxLTM",
  authDomain: "twitter-clone-2b8c5.firebaseapp.com",
  projectId: "twitter-clone-2b8c5",
  storageBucket: "twitter-clone-2b8c5.appspot.com",
  messagingSenderId: "45494468599",
  appId: "1:45494468599:web:fd0f33c568ebac6fc8f8f2",
  measurementId: "G-69KKG2HRCN",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

// Use this to initialize the firebase App

