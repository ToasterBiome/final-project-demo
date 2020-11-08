import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAMqismc1ATJ6tx9ylHrIJE0j5cJvWiyIc",
  authDomain: "colum-code-sprint-b-51b30.firebaseapp.com",
  databaseURL: "https://colum-code-sprint-b-51b30.firebaseio.com",
  projectId: "colum-code-sprint-b-51b30",
  storageBucket: "colum-code-sprint-b-51b30.appspot.com",
  messagingSenderId: "470005362512",
  appId: "1:470005362512:web:c12b88f074c5d203d30655"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const notesCollection = db.collection("notes");
export default db;
export {notesCollection};