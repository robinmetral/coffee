import React, { Component } from "react"
import firebase from "firebase"
import base, { firebaseApp } from "../base"
import AddResumeForm from "./AddResumeForm"
import EditResumeForm from "./EditResumeForm"
import Login from "./Login"
import Logout from "./Logout"

class App extends Component {

  // initialize state
  state = {
    resumes: {},
    uid: null,
    owner: null
  }

  // check if logges in
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

  addResume = (resume) => {
    // take a copy of state
    const resumes = { ...this.state.resumes }
    // add new resume
    resumes[`${Date.now()}`] = resume
    // set state
    this.setState({ resumes })
  }

  updateResume = (key, updatedResume) => {
    // take a copy of state
    const resumes = { ...this.state.resumes }
    // update single resume object
    resumes[key] = updatedResume // overriding
    // set state
    this.setState({ resumes })
  }

  deleteResume = (key) => {
    // take a copy of state
    const resumes = { ...this.state.resumes }
    // remove single resume object
    resumes[key] = null // need to set to null to work with Firebase
    // set state
    this.setState({ resumes })
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
    // sync resumes in state
    this.ref = base.syncState(`resumes`, {
      context: this,
      state: "resumes"
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
        { Object.keys(this.state.resumes).map( key => (
        <EditResumeForm
          key={key}
          index={key}
          resume={this.state.resumes[key]}
          updateResume={this.updateResume}
          deleteResume={this.deleteResume}
        /> 
        ))}
        <AddResumeForm addResume={this.addResume} />
        <Logout logout={this.logout} />
      </div>
    )
  }
}

export default App
