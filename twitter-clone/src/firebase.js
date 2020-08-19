import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBnvQICP4tmtf3dtBbXb5yMWQwWqKhhJGw",
  authDomain: "twitter-clone-292b4.firebaseapp.com",
  databaseURL: "https://twitter-clone-292b4.firebaseio.com",
  projectId: "twitter-clone-292b4",
  storageBucket: "twitter-clone-292b4.appspot.com",
  messagingSenderId: "234589452582",
  appId: "1:234589452582:web:7d75a5aaf5e44db81769e7",
  measurementId: "G-6HV9SQ04NB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
