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

  // remove syncState binding on unmount
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

  createCafe = async cafe => {
    // take a copy of state
    const devcafes = { ...this.state.devcafes };
    // check that cafe doesn't already exist
    if (
      Object.values(devcafes).find(
        node => node.properties.nodeId === cafe.properties.nodeId
      ) === undefined
    ) {
      // add cafe
      devcafes[cafe.properties.createdAt] = cafe;
      // use a setState callback to fire before re-rendering
      // https://reactjs.org/docs/react-component.html#setstate
      this.setState({ devcafes }, () => {
        console.log(`Added ${cafe.properties.name} to State.`);
      });
    } else console.log(`${cafe.properties.name} already exists!`);
  };

  // TODO only for moderators
  /*
  deleteCafe = id => {
    // take a copy of state
    const devcafes = { ...this.state.devcafes };
    // remove single cafe object
    devcafes[id] = null; // need to set to null to work with Firebase
    // set state
    this.setState({ devcafes });
  };
  */

  // TODO check that user hasn't already reviewed
  createReview = (id, review) => {
    // take a copy of state
    const devcafes = { ...this.state.devcafes };
    // create reviews object if undefined
    devcafes[id].properties.reviews = devcafes[id].properties.reviews || {};
    // add review
    devcafes[id].properties.reviews[review.createdAt] = review;
    // setstate with callback
    this.setState({ devcafes }, () => {
      console.log(`Added the review to State.`);
    });
  };

  // TODO check that this is the user's own review
  updateReview = (id, review) => {
    // take a copy of state
    const devcafes = { ...this.state.devcafes };
    // overwrite review
    devcafes[id].properties.reviews[review.createdAt] = review;
    // setstate
    this.setState({ devcafes });
  };

  // TODO check that this is the user's own review
  deleteReview = (cafeId, reviewId) => {
    // take a copy of state
    const devcafes = { ...this.state.devcafes };
    // overwrite review
    devcafes[cafeId].properties.reviews[reviewId] = null;
    // setstate
    this.setState({ devcafes });
  };

  authHandler = async authData => {
    // destructure authData
    const { uid, displayName } = authData.user;
    // sync state with Firebase
    this.ref = base.syncState(`devcafes`, {
      context: this,
      state: "devcafes"
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

  // TODO render logout somewhere
  logout = async () => {
    // log out on firebase
    await firebase.auth().signOut();
    // remove user from state
    this.setState({
      user: null
    });
  };

  render() {
    return (
      <Layout>
        <Map cafes={this.state.devcafes} handleClick={this.handleClick} />
        <Panel
          user={this.state.user}
          cafe={this.state.devcafes[this.state.active]}
          createCafe={this.createCafe}
          createReview={this.createReview}
          updateReview={this.updateReview}
          deleteReview={this.deleteReview}
          login={this.login}
          logout={this.logout}
          open={this.state.panelOpen}
          togglePanel={this.togglePanel}
          changeActive={this.changeActive}
        />
      </Layout>
    );
  }
}

export default App;
