import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCAQ-8EgDfCiNM3lx0nihDbbfESn7XM2kM",
  authDomain: "crown-db-56668.firebaseapp.com",
  databaseURL: "https://crown-db-56668.firebaseio.com",
  projectId: "crown-db-56668",
  storageBucket: "crown-db-56668.appspot.com",
  messagingSenderId: "458429506257",
  appId: "1:458429506257:web:2d873bbe38eeb3b3365bf0",
  measurementId: "G-YTTKTQKPZN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
