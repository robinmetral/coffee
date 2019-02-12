import React, { Component } from "react"

import AddForm from "./AddForm"
import EditForm from "./EditForm"
import Logout from "./Logout"
import ViewCafe from "./ViewCafe"
import PanelLayout from "../containers/PanelLayout"

class Panel extends Component {
  render() {
    // check if logged in
    if(!this.props.uid || this.props.uid !== this.props.owner) {
      return (
        <PanelLayout
          panel={this.props.panel}
        >
          <ViewCafe
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
      <PanelLayout
        panel={this.props.panel}
      >
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
