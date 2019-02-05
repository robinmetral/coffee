import React, { Component } from "react"
import PropTypes from "prop-types"
import firebase from "firebase"
import base, { firebaseApp } from "../base"
import AddResumeForm from "./AddResumeForm"
import EditResumeForm from "./EditResumeForm"
import Login from "./Login"
import Logout from "./Logout"

class Admin extends Component {

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

  // check if already logged in on component mount
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.authHandler({ user })
      }
    })
  }

  authHandler = async (authData) => {
    // fetch firebase data
    const data = await base.fetch(`/`, { context: this })
    // in case owner isn't set, set as my gh uid
    if(!data.owner) {
      await base.post(`/owner`, {
        data: "YQogwrdn45fUQ7tGAESDraONoyN2"
      })
    }
    // set logged in user to state
    this.setState({
      uid: authData.user.uid,
      owner: data.owner
    })
  }

  authenticate = () => {
    const authProvider = new firebase.auth.GithubAuthProvider()
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler)
  }

  logout = async () => {
    // log out on firebase
    await firebase.auth().signOut()
    // clear state
    this.setState({ uid: null })
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
        { Object.keys(this.props.resumes).map( key => (
        <EditResumeForm
          key={key}
          index={key}
          resume={this.props.resumes[key]}
          updateResume={this.props.updateResume}
          deleteResume={this.props.deleteResume}
        /> 
        ))}
        <AddResumeForm addResume={this.props.addResume} />
        <Logout logout={this.logout} />
      </div>
    )
  }
}

export default Admin
