import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAaaZLEl7JvXHFnJG8_WUIZT4-SyQ1bFRQ",
authDomain: "react-app-9464a.firebaseapp.com",
projectId: "react-app-9464a",
storageBucket: "react-app-9464a.appspot.com",
messagingSenderId: "816100989656",
appId: "1:816100989656:web:ff9e7366669ec8b31555ad"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, GoogleAuthProvider };