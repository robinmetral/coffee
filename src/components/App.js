import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";

import base, { firebaseApp } from "../base";
import Layout from "./Layout";
import Helmet from "./Helmet";
import Map from "./Map";
import Panel from "./Panel";

class App extends Component {
  // initialize state
  state = {
    devcafes: {},
    clicked: "",
    name: "",
    panel: "closed",
    uid: null,
    owner: null
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
        devcafes[id].coordinates[0] === event.latlng.lat &&
        devcafes[id].coordinates[1] === event.latlng.lng
    );
    // if no cafe was clicked close the panel
    if (!id) {
      this.setState({
        clicked: "",
        name: "",
        panel: "closed"
      });
    } else {
      // get clicked cafe's name
      const name = devcafes[id].properties.name;
      // set clicked cafe id, its name, and panel status in state
      this.setState({
        clicked: id,
        name: name,
        panel: "open"
      });
    }
  };

  togglePanel = () => {
    // take the opposite of current value
    const status = this.state.panel === "closed" ? "open" : "closed";
    this.setState({
      panel: status
    });
  };

  addCafe = async nodeId => {
    // fetch OSM data vie an Overpass API query
    let response = await fetch(
      `https://www.overpass-api.de/api/interpreter?data=[out:json];node(${nodeId});out;`
    );
    let json = await response.json();
    // initialize GeoJSON object
    const cafe = {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: []
      },
      properties: {}
    };
    // destructure
    let node = json.elements[0];
    let { tags } = node;
    let { geometry, properties } = cafe;
    // populate with pulled data
    geometry.coordinates = [node.lat, node.lon];
    properties.nodeId = nodeId;
    properties.createdAt = Date.now();
    if (tags.name) {
      properties.name = tags.name;
    }
    if (tags["addr:city"]) {
      properties.addrCity = tags["addr:city"];
    }
    if (tags["addr:postcode"]) {
      properties.addrPostcode = tags["addr:postcode"];
    }
    if (tags["addr:street"]) {
      properties.addrStreet = tags["addr:street"];
    }
    if (tags["addr:housenumber"]) {
      properties.addrHousenumber = tags["addr:housenumber"];
    }
    if (tags.internet_access) {
      if (tags.internet_access === ("wlan" | "yes")) {
        properties.internetAccess = true;
      } else if (tags.internet_access === "no") {
        properties.internetAccess = false;
      }
    }
    if (tags.opening_hours) {
      properties.openingHours = tags.opening_hours;
    }
    if (tags.website) {
      properties.url = tags.website;
    } else if (tags.facebook) {
      properties.url = tags.facebook;
    }
    if (tags["drink:espresso"] === ("served" | "yes")) {
      properties.servesEspresso = true;
    } else if (tags["drink:espresso"] === "no") {
      properties.servesEspresso = false;
    }
    if (tags["drink:filter_coffee"] === ("served" | "yes")) {
      properties.servesFilter = true;
    } else if (tags["drink:filter_coffee"] === "no") {
      properties.servesFilter = false;
    }
    if (tags.microroasting === "yes") {
      properties.microroasting = true;
    }
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
        <Helmet name={this.state.name} />
        <Map cafes={this.state.devcafes} handleClick={this.handleClick} />
        <Panel
          uid={this.state.uid}
          owner={this.state.owner}
          cafe={this.state.devcafes[this.state.clicked]}
          addCafe={this.addCafe}
          deleteCafe={this.deleteCafe}
          login={this.login}
          logout={this.logout}
          panel={this.state.panel}
          togglePanel={this.togglePanel}
        />
      </Layout>
    );
  }
}

export default App;
