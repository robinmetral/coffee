import React, { Component } from "react"

import ActionButton from "./ActionButton"

class Auth extends Component {
  render() {

    // if not logged in
    if(!this.props.uid) {
      return (
        <ActionButton
          unicode="1f527"
          description="Wrench"
          title="Connexion"
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
      <ActionButton
        unicode="1f512"
        description="Locked"
        title="Déconnexion"
        action={this.props.logout}
      />
    )
  }
}

export default Auth
