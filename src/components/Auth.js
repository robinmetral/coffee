import React, { Component } from "react"

import StyledButton from "./styled/StyledButton"

class Auth extends Component {
  render() {

    // if not logged in
    if(!this.props.uid) {
      return (
        <StyledButton onClick={this.props.login}>Connexion</StyledButton>
      )
    }

    // if not owner
    if(this.props.uid !== this.props.owner) {
      alert("Vous n'avez pas la permission de modifier les cafés")
      this.props.logout()
    }

    // if logged in
    return (
      <StyledButton onClick={this.props.logout}>Déconnexion</StyledButton>
    )
  }
}

export default Auth
