import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBkTvEGd2VdwDXKRkGzsYDxcFs_QvM7UOw",
    authDomain: "test-cases-tracker.firebaseapp.com",
    projectId: "test-cases-tracker",
    storageBucket: "test-cases-tracker.appspot.com",
    messagingSenderId: "141029564994",
    appId: "1:141029564994:web:8eee56b7f3b2ef9deac3db"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};