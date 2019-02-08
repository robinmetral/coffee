import React, { Component } from "react"
import firebase from "firebase"

import base, { firebaseApp } from "base"
import Add from "components/Add"
import Edit from "components/Edit"
import Login from "components/Login"
import Logout from "components/Logout"
import Map from "components/Map"

class App extends Component {

  // initialize state
  state = {
    cafes: {},
    uid: null,
    owner: null
  }

  // check if logged in
  componentDidMount() {
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

  addCafe = (cafe) => {
    // take a copy of state
    const cafes = { ...this.state.cafes }
    // add new cafe
    cafes[cafe.osm] = cafe
    // set state
    this.setState({ cafes })
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

  authenticate = () => {
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
    // check if logged in
    if(!this.state.uid) {
      return <Login authenticate={this.authenticate} />
    }

    // check if owner
    if(this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry, you're not the owner.</p>
          <Logout logout={this.logout} />
        </div>
      )
    }

    // otherwise render admin
    return (
      <div>
        <h2>Admin</h2>
        { Object.keys(this.state.cafes).map( key => (
        <Edit
          key={key}
          index={key}
          cafe={this.state.cafes[key]}
          updateCafe={this.updateCafe}
          deleteCafe={this.deleteCafe}
        /> 
        ))}
        <Add addCafe={this.addCafe} />
        <Logout logout={this.logout} />
      </div>
    )
  }
}

export default App
