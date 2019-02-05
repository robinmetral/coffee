import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp (
  {
    apiKey: "AIzaSyDgvfMHm5R4r_teazZIC5yitJnqFj6ks0M",
    authDomain: "resume-ec697.firebaseapp.com",
    databaseURL: "https://resume-ec697.firebaseio.com",
  }
)

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
