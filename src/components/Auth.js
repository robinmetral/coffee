import React, { Component } from "react"

import StyledIcon from "./styled/StyledIcon"

class Auth extends Component {
  render() {

    // if not logged in
    if(!this.props.uid) {
      return (
        <StyledIcon onClick={this.props.login}>&#x1f527;</StyledIcon>
      )
    }

    // if not owner
    if(this.props.uid !== this.props.owner) {
      alert("Vous n'avez pas la permission de modifier les cafés")
      this.props.logout()
    }

    // if logged in
    return (
      <StyledIcon onClick={this.props.logout}>Déconnexion</StyledIcon>
    )
  }
}

export default Auth
