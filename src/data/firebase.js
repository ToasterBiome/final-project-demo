import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// REACT_APP_API_KEY="AIzaSyAMqismc1ATJ6tx9ylHrIJE0j5cJvWiyIc"
// REACT_APP_AUTH_DOMAIN="colum-code-sprint-b-51b30.firebaseapp.com"
// REACT_APP_DATABASE_URL="https://colum-code-sprint-b-51b30.firebaseio.com"
// REACT_APP_PROJECT_ID="colum-code-sprint-b-51b30"
// REACT_APP_STORAGE_BUCKET="colum-code-sprint-b-51b30.appspot.com"
// REACT_APP_MESSAGING_SENDER_ID="470005362512"
// REACT_APP_APP_ID="1:470005362512:web:c12b88f074c5d203d30655"
// REACT_APP_HELP="21"

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

const db = firebase.firestore();
const notesCollection = db.collection("notes");
export default db;
export {notesCollection, provider, auth, firebase };