import React, { Component } from "react"

import Icon from "./Icon"

class Auth extends Component {
  render() {

    // if not logged in
    if(!this.props.uid) {
      return (
        <Icon
          code="&#x1f527;"
          description="wrench"
          title="Login"
          action={this.props.login}
        />
      )
    }

    // if not owner
    if(this.props.uid !== this.props.owner) {
      alert("Vous n'avez pas la permission de modifier les cafés")
      this.props.logout()
    }

    // if logged in
    return (
      <Icon
        code="&#x1f512;"
        description="locked"
        title="Logout"
        action={this.props.logout}
      />
    )
  }
}

export default Auth
