import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD6UsHTistUlMf6-XMYZ33uiwFmq_Xir-A",
  authDomain: "mapping-coffee.firebaseapp.com",
  databaseURL: "https://mapping-coffee.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
