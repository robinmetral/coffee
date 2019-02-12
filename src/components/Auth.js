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
      console.log("Vous n'avez pas la permission de modifier les cafés")
      return (
        <div>
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
