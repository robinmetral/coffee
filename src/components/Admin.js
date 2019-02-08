import React, { Component } from "react"

import Add from "./Add"
import Edit from "./Edit"
import Login from "./Login"
import Logout from "./Logout"

class Admin extends Component {
  render() {
    // check if logged in
    if(!this.props.uid) {
      return <Login authenticate={this.props.authenticate} />
      }

    // check if owner
    if(this.props.uid !== this.props.owner) {
      return (
        <div>
          <p>Sorry, you're not the owner.</p>
          <Logout logout={this.props.logout} />
        </div>
        )
    }

    // otherwise render admin
    return (
      <div>
        <h2>Admin</h2>
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
