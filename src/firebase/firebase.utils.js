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

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating the user ", error.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
