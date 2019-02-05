import React, { Component } from "react"
import PropTypes from "prop-types"
import firebase from "firebase"
import base, { firebaseApp } from "../base"
import AddResumeForm from "./AddResumeForm"
import EditResumeForm from "./EditResumeForm"
import Login from "./Login"

class Admin extends Component {

  static propTypes = {
    resumes: PropTypes.object,
    addResume: PropTypes.func,
    updateResume: PropTypes.func,
    deleteResume: PropTypes.func,
  }

/*
  authenticate = () => {
    const authProvider = new firebase.auth.GithubAuthProvider()
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler)
  }
*/

  render() {
    return (
      <div className="inventory">
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
      </div>
    )
  }
}

export default Admin
