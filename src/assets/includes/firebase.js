import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBI46Cx4tZACOawGh1bgsDJYFTz262U1zw",
  authDomain: "mediatheque-33ade.firebaseapp.com",
  projectId: "mediatheque-33ade",
  storageBucket: "mediatheque-33ade.appspot.com",
  appId: "1:533312366520:web:4833b0e02dd3134190d14d"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
	auth,
	db,
	usersCollection,
}