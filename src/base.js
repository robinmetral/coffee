import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAVhgdq1DCAuRiIuonkv5xBp-ncGRZE3WA",
  authDomain: "robinmetral-coffee.firebaseapp.com",
  databaseURL: "https://robinmetral-coffee.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
