import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

console.log("API KEY", process.env.REACT_APP_FIREBASE_API_KEY);
const config = {
  apiKey: "AIzaSyAs-j0ZEcImRP5awNQHnGcgGojyJxv1kP0",
  authDomain: "styles-db-2cb73.firebaseapp.com",
  databaseURL: "https://styles-db-2cb73.firebaseio.com",
  projectId: "styles-db-2cb73",
  storageBucket: "styles-db-2cb73.appspot.com",
  messagingSenderId: "286393179801",
  appId: "1:286393179801:web:57783c58524ec92d676208",
  measurementId: "G-6R6BV2C10X",
};

export const createUserProfile = async(userAuth, additionalData) => {
  if(!userAuth){
    return;
  }
  
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
