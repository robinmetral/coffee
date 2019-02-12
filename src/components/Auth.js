import React, { Component } from "react"

import Login from "./Login"
import Logout from "./Logout"

class Auth extends Component {
  render() {

    // if not logged in
    if(!this.props.uid) {
      return (
        <Login login={this.props.login} />
      )
    }

    // if not owner
    if(this.props.uid !== this.props.owner) {
      return (
        <div>
          <p>Seulement Robin peut modifier les cafés, désolé.</p>
          <Logout logout={this.props.logout} />
        </div>
      )
    }

    // if owner
    return (
      <Logout logout={this.props.logout} />
    )
  }
}

export default Auth
