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
    cafes: {},
    reviews: {},
    active: undefined,
    user: null,
    panelOpen: true
  };

  componentDidMount() {
    // keep user logged in on reload
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });

    // fetch data from firebase
    base
      .fetch(`/`, {
        context: this
      })
      .then(data => {
        this.setState({
          cafes: data.cafes,
          reviews: data.reviews
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClick = event => {
    // find cafe is state that was clicked based on coordinates
    const { cafes } = this.state;
    const id = Object.keys(cafes).find(
      id =>
        cafes[id].geometry.coordinates[0] === event.latlng.lat &&
        cafes[id].geometry.coordinates[1] === event.latlng.lng
    );
    if (id) {
      this.changeActive(id);
    } else {
      // toggle panel
      this.setState({ active: undefined });
      this.togglePanel();
    }
  };

  changeActive = id => {
    // put active cafe id in state and open panel
    this.setState({
      active: id,
      panelOpen: true
    });
  };

  togglePanel = () => {
    const panelOpen = this.state.panelOpen ? false : true;
    this.setState({ panelOpen });
  };

  createCafe = cafe => {
    // take a copy of state
    const cafes = { ...this.state.cafes };
    // add current user to cafe object
    cafe.properties.user = this.state.user;
    // add cafe
    cafes[cafe.properties.createdAt] = cafe;
    // use a setState callback to fire before re-rendering
    // https://reactjs.org/docs/react-component.html#setstate
    this.setState({ cafes }, () => {
      console.log(`Added ${cafe.properties.name} to State.`);
    });
    // open new cafe in panel
    this.changeActive(cafe.properties.createdAt);
  };

  createReview = (cafeId, review) => {
    // take a copy of state
    const reviews = { ...this.state.reviews };
    // take a copy of reviews by current user or initialize
    const userReviews = { ...reviews[this.state.user.uid] } || {};
    // add review to userReviews
    userReviews[cafeId] = review;
    // add userReviews to reviews
    reviews[this.state.user.uid] = userReviews;
    // setstate
    this.setState({ reviews });
  };

  updateReview = (cafeId, review) => {
    // take a copy of state
    const reviews = { ...this.state.reviews };
    // overwrite review
    reviews[this.state.user.uid][cafeId] = review;
    // setstate
    this.setState({ reviews });
  };

  deleteReview = (cafeId) => {
    // take a copy of state
    const reviews = { ...this.state.reviews };
    // set review as null to delete from Firebase
    reviews[this.state.user.uid][cafeId] = null;
    // setstate
    this.setState({ reviews });
  };

  authHandler = async authData => {
    // destructure authData
    const { uid, displayName } = authData.user;
    // sync state with Firebase
    this.ref = base.syncState(`cafes`, {
      context: this,
      state: "cafes"
    });
    // set logged in user to state
    this.setState({
      user: { uid, displayName }
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
    // remove user from state
    this.setState({
      user: null
    });
  };

  // remove syncState binding on unmount
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <Layout>
        <Map cafes={this.state.cafes} handleClick={this.handleClick} />
        <Panel
          user={this.state.user}
          cafe={this.state.cafes[this.state.active]}
          createCafe={this.createCafe}
          createReview={this.createReview}
          updateReview={this.updateReview}
          deleteReview={this.deleteReview}
          login={this.login}
          logout={this.logout}
          open={this.state.panelOpen}
          togglePanel={this.togglePanel}
        />
      </Layout>
    );
  }
}

export default App;
