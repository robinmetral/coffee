import React, { Component } from "react"

import Add from "./Add"
import Edit from "./Edit"
import Logout from "./Logout"
import Home from "./Home"

class Admin extends Component {
  render() {
    // check if logged in
    if(!this.props.uid || this.props.uid !== this.props.owner) {
      return (
        <Home
          uid={this.props.uid}
          owner={this.props.owner}
          login={this.props.login}
          logout={this.props.logout}
        />
      )
    }

    // otherwise render admin
    return (
      <div>
        <h1>Admin</h1>
        { Object.keys(this.props.cafes).map( key => (
        <Edit
          key={key}
          index={key}
          cafe={this.props.cafes[key]}
          updateCafe={this.props.updateCafe}
          deleteCafe={this.props.deleteCafe}
        /> 
        ))}
        <Add addCafe={this.props.addCafe} />
        <Logout logout={this.props.logout} />
      </div>
    )
  }
}

export default Admin
