import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =  firebase.initializeApp ({
  apiKey: "AIzaSyC4svhYk5Cbz69kgEIfDn48l1HAq4YDAJg",
  authDomain: "clone2-0.firebaseapp.com",
  projectId: "clone2-0",
  storageBucket: "clone2-0.appspot.com",
  messagingSenderId: "54981758761",
  appId: "1:54981758761:web:1b14bb7c4dec894ecdb138",
  measurementId: "G-53F8PT6P0M"
});

const db = firebase.firestore();

export {db}