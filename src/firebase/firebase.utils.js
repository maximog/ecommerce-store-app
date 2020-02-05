import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAGmuC59wyF43pmzOBONewLVpWyfXj91ew",
    authDomain: "ecommerce-store-db-9355a.firebaseapp.com",
    databaseURL: "https://ecommerce-store-db-9355a.firebaseio.com",
    projectId: "ecommerce-store-db-9355a",
    storageBucket: "ecommerce-store-db-9355a.appspot.com",
    messagingSenderId: "551943801640",
    appId: "1:551943801640:web:2acb753f3ee1678c799e1d",
    measurementId: "G-GJCW72D3J4"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
