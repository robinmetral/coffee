import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import base, { firebaseApp } from "../base";
import Layout from "./Layout";
import Map from "./Map";
import Panel from "./Panel";

class App extends Component {
  // initialize state
  state = {
    devcafes: {},
    clicked: "",
    uid: null,
    open: true
  };

  componentDidMount() {
    // keep user logged in on reload
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });

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
    if (id) {
      // put cafe id in state and open panel
      this.setState({
        clicked: id,
        open: true
      });
    } else {
      // toggle panel
      this.setState({ clicked: undefined });
      this.togglePanel();
    }
  };

  togglePanel = () => {
    // take the opposite of current value
    const open = this.state.open ? false : true;
    this.setState({ open });
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
    const devcafes = { ...this.state.devcafes };
    // create reviews object if undefined
    devcafes[id].properties.reviews = devcafes[id].properties.reviews || {};
    // add review
    devcafes[id].properties.reviews[review.createdAt] = review;
    // use a setState callback to fire before re-rendering
    // https://reactjs.org/docs/react-component.html#setstate
    this.setState({ devcafes }, () => {
      console.log(`Added the review to State.`);
    });
  };

  authHandler = async authData => {
    // fetch firebase data
    const data = await base.fetch(`/`, { context: this });
    // set logged in user to state
    this.setState({
      uid: authData.user.uid
    });
  };

  login = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    // log out on firebase
    await firebase.auth().signOut();
    // remove uid from state
    this.setState({
      uid: null
    });
  };

  render() {
    return (
      <Layout>
        <Map cafes={this.state.devcafes} handleClick={this.handleClick} />
        <Panel
          uid={this.state.uid}
          cafe={this.state.devcafes[this.state.clicked]}
          createCafe={this.createCafe}
          deleteCafe={this.deleteCafe}
          createReview={this.createReview}
          login={this.login}
          logout={this.logout}
          open={this.state.open}
          togglePanel={this.togglePanel}
          clicked={this.state.clicked}
        />
      </Layout>
    );
  }
}

export default App;
