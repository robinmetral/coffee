import React, { Component } from "react"

import AddForm from "./AddForm"
import EditForm from "./EditForm"
import Logout from "./Logout"
import Home from "./Home"
import AdminLayout from "../containers/AdminLayout"

class Admin extends Component {
  render() {
    // check if logged in
    if(!this.props.uid || this.props.uid !== this.props.owner) {
      return (
        <AdminLayout
          panel={this.props.panel}
        >
          <Home
            uid={this.props.uid}
            owner={this.props.owner}
            login={this.props.login}
            logout={this.props.logout}
            cafe={this.props.cafe}
            clicked={this.props.clicked}
          />
        </AdminLayout>
        )
    }

    // otherwise render admin
    return (
      <AdminLayout>
        <h1>Admin</h1>
        <EditForm
          cafe={this.props.cafe}
          updateCafe={this.props.updateCafe}
          deleteCafe={this.props.deleteCafe}
        /> 
        <AddForm addCafe={this.props.addCafe} />
        <Logout logout={this.props.logout} />
      </AdminLayout>
      )
  }
}

export default Admin
