import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { Alert } from "react-native";

const config = {
  apiKey: "AIzaSyBBhQ6Uhnu1H1tqNeZjCoe9j0JOKPuVUCs",
  authDomain: "birdbox-8194a.firebaseapp.com",
  projectId: "birdbox-8194a",
  storageBucket: "birdbox-8194a.appspot.com",
  messagingSenderId: "253321208919",
  appId: "1:253321208919:web:a331e6d4d3beb6f81e2f12",
  measurementId: "G-FGGNB6P2JM"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(config)
} else {
  app = firebase.app()
}

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }