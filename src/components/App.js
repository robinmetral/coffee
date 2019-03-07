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

  // TODO remove security, done in Firebase
  createCafe = async cafe => {
    // take a copy of state
    const cafes = { ...this.state.cafes };
    // check if user is logged in
    if (!this.state.user) {
      // no user logged in, throw error
      console.log(`Log in to add a new cafe.`);
    }
    // check if cafe already exists
    else if (
      Object.values(cafes).find(
        node => node.properties.nodeId === cafe.properties.nodeId
      )
    ) {
      // throw error
      console.log(`${cafe.properties.name} already exists!`);
    }
    // user logged in and cafe doesn't exist yet
    else {
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
    }
  };

  // TODO remove security, done in Firebase
  createReview = (id, review) => {
    // take a copy of state
    const cafes = { ...this.state.cafes };
    // if no reviews
    if (!cafes[id].properties.reviews) {
      // create review object
      cafes[id].properties.reviews = {};
      // add review
      cafes[id].properties.reviews[review.createdAt] = review;
      // setstate
      this.setState({ cafes });
    }
    // if user has already commented
    else if (
      Object.values(cafes[id].properties.reviews).find(
        rev => rev.user.uid === this.state.user.uid
      )
    ) {
      // throw error
      console.log(
        `You've already reviewed this café, ${review.user.displayName}`
      );
    }
    // else user hasn't commented yet
    else {
      // add review
      cafes[id].properties.reviews[review.createdAt] = review;
      // setstate
      this.setState({ cafes });
    }
  };

  // TODO remove security, done in Firebase
  updateReview = (cafeId, review) => {
    // take a copy of state
    const cafes = { ...this.state.cafes };
    // check that this is the current user's own review
    if (
      cafes[cafeId].properties.reviews[review.createdAt].user.uid ===
      this.state.user.uid
    ) {
      // overwrite review
      cafes[cafeId].properties.reviews[review.createdAt] = review;
      // setstate
      this.setState({ cafes });
    }
    // else it's not the current user's review
    else {
      // throw error
      console.log(
        `${this.state.user.displayName} hasn't written this review, ${
          cafes[cafeId].properties.reviews[review.createdAt].user.displayName
        } has.`
      );
    }
  };

  // TODO remove security, done in Firebase
  deleteReview = (cafeId, reviewId) => {
    // take a copy of state
    const cafes = { ...this.state.cafes };
    // check that this is the current user's own review
    if (
      cafes[cafeId].properties.reviews[reviewId].user.uid ===
      this.state.user.uid
    ) {
      // overwrite review
      cafes[cafeId].properties.reviews[reviewId] = null;
      // setstate
      this.setState({ cafes });
    }
    // else it's not the current user's own review
    else {
      // throw error
      console.log(`This isn't your review, ${this.state.user.displayName}`);
    }
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
