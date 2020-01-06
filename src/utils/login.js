import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../configs/firebaseConfig";
import withFirebaseAuth from "react-with-firebase-auth";
const firebaseApp =
  firebase.apps.length === 0
    ? firebase.initializeApp(firebaseConfig)
    : firebase;
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export { firebaseAppAuth, providers, withFirebaseAuth };
