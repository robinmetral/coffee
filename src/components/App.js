import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import base, { firebaseApp } from "../base";
import Layout from "./Layout";
import Map from "./Map";
import Layer from "./Layer";

class App extends Component {
  // initialize state
  state = {
    devcafes: {},
    clicked: "",
    uid: null
  };

  componentDidMount() {
    // fetch cafes from firebase
    base
      .fetch(`devcafes`, {
        context: this
      })
      .then(devcafes => {
        this.setState({ devcafes });
      })
      .catch(error => {
        console.log("Error fetching cafes from Firebase");
      });

    // check if logged in
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  // remove binding when unmounting to avoid memory leak
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  handleClick = event => {
    // find cafe is state that was clicked based on coordinates
    const { devcafes } = this.state;
    const id = Object.keys(devcafes).find(
      id =>
        devcafes[id].geometry.coordinates[0] === event.latlng.lat &&
        devcafes[id].geometry.coordinates[1] === event.latlng.lng
    );
    // if no cafe was clicked close the panel
    if (!id) {
      this.setState({
        clicked: undefined,
        open: false
      });
    } else {
      // get clicked cafe's name
      const name = devcafes[id].properties.name;
      // set clicked cafe id, its name, and panel status in state
      this.setState({
        clicked: id,
        open: true
      });
    }
  };

  toggleLayer = () => {
    // take the opposite of current value
    const open = this.state.open ? false : true;
    this.setState({
      open
    });
  };

  createCafe = async cafe => {
    // take a copy of state
    const devcafes = { ...this.state.devcafes };
    // add new cafe
    devcafes[cafe.properties.createdAt] = cafe;
    // use a setState callback to fire before re-rendering
    // https://reactjs.org/docs/react-component.html#setstate
    this.setState({ devcafes }, () => {
      console.log(`Added ${cafe.properties.name} to State.`);
    });
  };

  deleteCafe = id => {
    // take a copy of state
    const devcafes = { ...this.state.devcafes };
    // remove single cafe object
    devcafes[id] = null; // need to set to null to work with Firebase
    // set state
    this.setState({ devcafes });
  };

  createReview = (id, review) => {
    // take a copy of state
    const { devcafes } = this.state;
    // create unique id
    review.createdAt = Date.now();
    // add review to copy of state
    devcafes[id].properties.reviews[review.createdAt] = review;
    // update state
    this.setState({ devcafes });
  };

  authHandler = async authData => {
    // fetch firebase data
    const data = await base.fetch(`/`, { context: this });
    // set logged in user to state
    this.setState({
      uid: authData.user.uid,
      owner: data.owner
    });
    // sync cafes in state
    this.ref = base.syncState(`devcafes`, {
      context: this,
      state: "devcafes"
    });
  };

  login = () => {
    const authProvider = new firebase.auth.GithubAuthProvider();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    // log out on firebase
    await firebase.auth().signOut();
    // remove binding of cafes in state
    await base.removeBinding(this.ref);
    // remove uid from state
    this.setState({
      uid: null
    });
  };

  render() {
    return (
      <Layout>
        <Map cafes={this.state.devcafes} handleClick={this.handleClick} />
        <Layer
          uid={this.state.uid}
          cafe={this.state.devcafes[this.state.clicked]}
          createCafe={this.createCafe}
          deleteCafe={this.deleteCafe}
          createReview={this.createReview}
          login={this.login}
          logout={this.logout}
        />
      </Layout>
    );
  }
}

export default App;
