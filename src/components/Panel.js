import React, { Component } from "react"

import AddCafeForm from "./AddCafeForm"
import EditCafeForm from "./EditCafeForm"
import ViewCafe from "./ViewCafe"
import PanelLayout from "./styled/PanelLayout"
import PanelButtons from "./styled/PanelButtons"
import ActionButton from "./ActionButton"
import Auth from "./Auth"

class Panel extends Component {
  render() {
    const isLoggedIn = (this.props.uid && this.props.uid === this.props.owner)
    return (
      <PanelLayout
        panel={this.props.panel}
      >
        { isLoggedIn ? (
        <div>
          <EditCafeForm
            cafe={this.props.cafe}
            updateCafe={this.props.updateCafe}
            deleteCafe={this.props.deleteCafe}
          /> 
          <AddCafeForm addCafe={this.props.addCafe} />
        </div>
        ) : (
          <ViewCafe
            cafe={this.props.cafe}
            clicked={this.props.clicked}
          />
        ) }
        <PanelButtons>
          <ActionButton
            unicode="1f449"
            alt="Backhand Index Pointing Right"
            title="Fermer"
            action={this.props.togglePanel}
          />
          <Auth
            uid={this.props.uid}
            owner={this.props.owner}
            login={this.props.login}
            logout={this.props.logout}
          />
        </PanelButtons>
      </PanelLayout>
    )
  }
}

export default Panel
