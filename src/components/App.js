import React, { Component } from "react"
import firebase from "firebase/app"
import "firebase/auth"

import base, { firebaseApp } from "../base"
import Layout from "../containers/Layout"
import Map from "./Map"
import Admin from "./Admin"

class App extends Component {

  // initialize state
  state = {
    cafes: {},
    clicked: "",
    panel: false,
    uid: null,
    owner: null
  }

  componentDidMount() {

    // fetch cafes from firebase
    base.fetch(`cafes`, {
      context: this
    }).then(cafes => {
      this.setState({ cafes })
    }).catch(error => {
      console.log("Error fetching cafes from Firebase")
    })

    // check if logged in
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.authHandler({ user })
      }
    })

  }

  // remove binding when unmounting to avoid memory leak
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  // set clicked cafe in state
  handleClick = event => {
    // find cafe is state that was clicked based on coordinates
    const { cafes } = this.state
    const osm = Object.keys(cafes).find(osm => cafes[osm].coordinates[0] === event.latlng.lat && cafes[osm].coordinates[1] === event.latlng.lng)
    // set state
    this.setState({
      clicked: osm
    })
  }

  triggerPanel = () => {
    // take the current value
    const status = this.state.panel
    this.setState({
      panel: !status
    })
  }

  addCafe = async (cafe) => {
    // fetch OSM data vie an Overpass API query
    let response = await fetch(`https://www.overpass-api.de/api/interpreter?data=[out:json];node(${cafe.osm});out;`)
    let json = await response.json()
    // destructure
    let node = json.elements[0]
    let { tags } = node
    // add fetched values to cafe object
    cafe.coordinates = [node.lat, node.lon]
    cafe.hours = tags.opening_hours
    cafe.url = tags.website ? tags.website : tags.facebook ? tags.facebook : ""
    // add current date to cafe
    cafe.date = Date.now()
    // take a copy of state
    const cafes = { ...this.state.cafes }
    // add new cafe
    cafes[cafe.osm] = cafe
    // use a setState callback to fire before re-rendering
    // https://reactjs.org/docs/react-component.html#setstate
    this.setState({ cafes }, () => {
      console.log(`Successfully added ${cafe.name} to State.`)
    })
  }

  updateCafe = (updatedCafe) => {
    // take a copy of state
    const cafes = { ...this.state.cafes }
    // update single cafe object
    cafes[updatedCafe.osm] = updatedCafe // overriding
    // set state
    this.setState({ cafes })
  }

  deleteCafe = (osm) => {
    // take a copy of state
    const cafes = { ...this.state.cafes }
    // remove single cafe object
    cafes[osm] = null // need to set to null to work with Firebase
    // set state
    this.setState({ cafes })
  }

  authHandler = async (authData) => {
    // fetch firebase data
    const data = await base.fetch(`/`, { context: this })
    // set logged in user to state
    this.setState({
      uid: authData.user.uid,
      owner: data.owner
    })
    // sync cafes in state
    this.ref = base.syncState(`cafes`, {
      context: this,
      state: "cafes"
    })
  }

  login = () => {
    const authProvider = new firebase.auth.GithubAuthProvider()
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler)
  }

  logout = async () => {
    // log out on firebase
    await firebase.auth().signOut()
    // remove binding of cafes in state
    await base.removeBinding(this.ref)
    // remove uid from state
    this.setState({
      uid: null
    })
  }

  render() {
    return (
      <Layout>
        <Map
          cafes={this.state.cafes}
          handleClick={this.handleClick}
          triggerPanel={this.triggerPanel}
        />
        <Admin
          uid={this.state.uid}
          owner={this.state.owner}
          cafe={this.state.cafes[this.state.clicked]}
          addCafe={this.addCafe}
          updateCafe={this.updateCafe}
          deleteCafe={this.deleteCafe}
          login={this.login}
          logout={this.logout}
        />
      </Layout>
    )
  }
}

export default App
