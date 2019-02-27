import React, { Component } from "react";
import styled from "styled-components";

import CreateCafe from "./CreateCafe"
import ViewCafe from "./ViewCafe";
import PanelLayout from "./styled/PanelLayout";
import ActionButton from "./ActionButton";
import Auth from "./Auth";

const PanelButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

class Panel extends Component {
  render() {
    const isLoggedIn = this.props.uid;
    const isOwner = this.props.uid && this.props.uid === this.props.owner;
    return (
      <PanelLayout panel={this.props.panel}>
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
        {isOwner ? (
          <div>
            <CreateCafe createCafe={this.props.createCafe} />
          </div>
        ) : (
          <ViewCafe
            cafe={this.props.cafe}
            clicked={this.props.clicked}
            isLoggedIn={isLoggedIn}
          />
        )}
      </PanelLayout>
    );
  }
}

export default Panel;
