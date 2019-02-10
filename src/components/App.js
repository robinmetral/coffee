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

  addCafe = async (cafe) => {
    // fetch coordinates and opening hours from OSM based on ID
    let response = await fetch(`https://www.overpass-api.de/api/interpreter?data=[out:json];node(${cafe.osm});out;`)
    let node = await response.json()
    let coordinates = [node.elements[0].lat, node.elements[0].lon]
    // add fetched values to cafe object
    cafe.coordinates = coordinates
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

  updateCafe = (key, updatedCafe) => {
    // take a copy of state
    const cafes = { ...this.state.cafes }
    // update single cafe object
    cafes[key] = updatedCafe // overriding
    // set state
    this.setState({ cafes })
  }

  deleteCafe = (key) => {
    // take a copy of state
    const cafes = { ...this.state.cafes }
    // remove single cafe object
    cafes[key] = null // need to set to null to work with Firebase
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
    // take a copy of cafes
    const cafes = { ...this.state.cafes }
    // delete all keys
    for (const key of Object.getOwnPropertyNames(this.state.cafes)) delete this.state.cafes[key]
    // clear state
    this.setState({
      cafes,
      uid: null
    })
  }

  render() {
    return (
      <Layout>
        <Map
          cafes={this.state.cafes}
        />
        <Admin
          uid={this.state.uid}
          owner={this.state.owner}
          cafes={this.state.cafes}
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
