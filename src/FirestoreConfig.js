import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth'

firebase.initializeApp({
  apiKey: "AIzaSyCJPmwqyo8hbwwm7jj6HDeoutioPdbJ3dg",
  authDomain: "proy-burguer-queen.firebaseapp.com",
  databaseURL: "https://proy-burguer-queen.firebaseio.com",
  projectId: "proy-burguer-queen",
  storageBucket: "proy-burguer-queen.appspot.com",
  messagingSenderId: "1001641315849",
  appId: "1:1001641315849:web:e946d89203c00a9e"
});


const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});

export default db;