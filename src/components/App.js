import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import base from "../base";
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

    // TODO reinstate onAuthStateChanged method
    /* keep user logged in on reload
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
    */
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
    // add cafe
    cafes[cafe.properties.createdAt] = cafe;
    // TODO post to Firebase since I'm already syncing reviews?
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
    // check that reviews exist or initialize
    reviews[cafeId] = { ...reviews[cafeId] } || {};
    // add review to userReviews
    reviews[cafeId][review.createdAt] = review;
    // setstate
    this.setState({ reviews });
  };

  updateReview = (cafeId, review) => {
    // take a copy of state
    const reviews = { ...this.state.reviews };
    // overwrite review
    reviews[cafeId][review.createdAt] = review;
    // setstate
    this.setState({ reviews });
  };

  deleteReview = (cafeId, reviewId) => {
    // take a copy of state
    const reviews = { ...this.state.reviews };
    // set review as null to delete from Firebase
    reviews[cafeId][reviewId] = null;
    // setstate
    this.setState({ reviews });
  };

  // TODO deal with syncing cafes with Firebase
  authHandler = uid => {
    // fetch name from Firebase and set user to state
    base
      .fetch(`users/${uid}/name`, {
        context: this
      })
      .then(name => {
        this.setState({
          user: { uid, name }
        });
      })
      .catch(error => {
        console.log(error);
      });
    // sync reviews with Firebase
    // TODO fix firebase warnings
    this.ref = base.syncState(`reviews`, {
      context: this,
      state: `reviews`
    });
    // TODO render loading indicator while authentifying
    // TODO close Layer when login successful
  };

  logout = async () => {
    // log out on firebase
    await firebase.auth().signOut();
    // remove user from state
    this.setState({
      user: null
    });
  };

  componentWillUnmount() {
    // remove reviews syncState binding
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <Layout>
        <Map
          cafes={this.state.cafes}
          reviews={this.state.reviews}
          handleClick={this.handleClick}
        />
        <Panel
          user={this.state.user}
          cafe={this.state.cafes[this.state.active]}
          reviews={this.state.reviews[this.state.active]}
          createCafe={this.createCafe}
          createReview={this.createReview}
          updateReview={this.updateReview}
          deleteReview={this.deleteReview}
          authHandler={this.authHandler}
          logout={this.logout}
          panelOpen={this.state.panelOpen}
          togglePanel={this.togglePanel}
        />
      </Layout>
    );
  }
}

export default App;
