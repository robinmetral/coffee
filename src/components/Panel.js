import React, { Component } from "react"

import AddForm from "./AddForm"
import EditForm from "./EditForm"
import Logout from "./Logout"
import Home from "./Home"
import PanelLayout from "../containers/PanelLayout"

class Panel extends Component {
  render() {
    // check if logged in
    if(!this.props.uid || this.props.uid !== this.props.owner) {
      return (
        <PanelLayout
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
        </PanelLayout>
        )
    }

    // otherwise render admin
    return (
      <PanelLayout>
        <h1>Admin</h1>
        <EditForm
          cafe={this.props.cafe}
          updateCafe={this.props.updateCafe}
          deleteCafe={this.props.deleteCafe}
        /> 
        <AddForm addCafe={this.props.addCafe} />
        <Logout logout={this.props.logout} />
      </PanelLayout>
      )
  }
}

export default Panel
