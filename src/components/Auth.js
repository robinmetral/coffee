import React, { Component } from "react"

import Login from "./Login"
import Logout from "./Logout"

class Auth extends Component {
  render() {

    // if not logged in
    if(!this.props.uid) {
      return (
        <>
          <p>Log in to manage coffee shops.</p>
          <Login login={this.props.login} />
        </>
      )
    }

    // if not owner
    if(this.props.uid !== this.props.owner) {
      return (
        <div>
          <p>You can't manage coffee shops with these credentials.</p>
          <Logout logout={this.props.logout} />
        </div>
      )
    }

    // if owner
    return (
      <p>You are logged in as {this.props.uid} :)</p>
    )
  }
}

export default Auth
