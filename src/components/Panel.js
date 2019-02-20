import React, { Component } from "react"
import styled from "styled-components"

import AddCafeForm from "./AddCafeForm"
import EditCafeForm from "./EditCafeForm"
import ViewCafe from "./ViewCafe"
import PanelLayout from "./styled/PanelLayout"
import ActionButton from "./ActionButton"
import Auth from "./Auth"

const PanelButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`

class Panel extends Component {
  render() {
    const isLoggedIn = (this.props.uid && this.props.uid === this.props.owner)
    return (
      <PanelLayout
        panel={this.props.panel}
      >
        <PanelButtons>
          <Auth
            uid={this.props.uid}
            owner={this.props.owner}
            login={this.props.login}
            logout={this.props.logout}
          />
          <ActionButton
            unicode="1f449"
            alt="Backhand Index Pointing Right"
            title="Fermer"
            action={this.props.togglePanel}
          />
        </PanelButtons>
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
      </PanelLayout>
    )
  }
}

export default Panel
