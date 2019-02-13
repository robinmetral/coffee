import React, { Component } from "react"

import AddCafeForm from "./AddCafeForm"
import EditCafeForm from "./EditCafeForm"
import ViewCafe from "./ViewCafe"
import PanelLayout from "../containers/PanelLayout"
import Auth from "./Auth"

class Panel extends Component {
  render() {
    const isLoggedIn = (this.props.uid && this.props.uid === this.props.owner)
    return (
      <PanelLayout
        panel={this.props.panel}
      >
        <Auth
          uid={this.props.uid}
          owner={this.props.owner}
          login={this.props.login}
          logout={this.props.logout}
        />
        {
        isLoggedIn ? (
          <>
            <EditCafeForm
              cafe={this.props.cafe}
              updateCafe={this.props.updateCafe}
              deleteCafe={this.props.deleteCafe}
            /> 
            <AddCafeForm addCafe={this.props.addCafe} />
          </>
        ) : (
          <ViewCafe
            cafe={this.props.cafe}
            clicked={this.props.clicked}
          />
        )
        }
      </PanelLayout>
    )
  }
}

export default Panel
