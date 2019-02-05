import React, { Component } from "react"
import PropTypes from "prop-types"
import firebase from "firebase"
import base, { firebaseApp } from "../base"
import AddResumeForm from "./AddResumeForm"
import EditResumeForm from "./EditResumeForm"
import Login from "./Login"

class Inventory extends Component {

  static propTypes = {
    resumes: PropTypes.object,
    addResume: PropTypes.func,
    updateResume: PropTypes.func,
    deleteResume: PropTypes.func,
  }

  state = {
    uid: null,
    owner: null
  }

  // keep user logged in on page reload
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.authHandler({ user })
      }
    })
  }

  authHandler = async (authData) => {
    // look up current store in firebase db
    const store = await base.fetch(this.props.storeId, { context: this })
    // claim it if there is no owner yet
    if(!store.owner) {
      // save it as our own
      console.log("Making you store owner")
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      })
    }
    // set the state of the inventory component to reflect current user
    console.log("The store owner is " + store.owner)
    console.log("Logged in as " + authData.user.uid)
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    })
  }

  authenticate = () => {
    const authProvider = new firebase.auth.GithubAuthProvider()
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler)
  }

  logout = async () => {
    await firebase.auth().signOut() // sign out via firebase
    this.setState({ uid: null }) // clear state
    console.log("Logged out")
  }

  render() {
    // if not logged in, render login form
    if(!this.state.uid) {
      return <Login authenticate={this.authenticate} />
    }

    // if logged in, render inventory
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <button onClick={this.logout}>Log Out!</button>
        <AddResumeForm addResume={this.props.addResume} />
      </div>
    )
  }
}

export default Inventory
