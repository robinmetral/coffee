import React, { Component } from "react";

import CreateCafe from "./CreateCafe";
import ViewCafe from "./ViewCafe";
import ActionButton from "./ActionButton";
import Auth from "./Auth";


class Panel extends Component {
  render() {
    return (
      <div>
        <div>
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
        </div>
        <ViewCafe
          cafe={this.props.cafe}
          clicked={this.props.clicked}
        />
        <CreateCafe createCafe={this.props.createCafe} />
      </div>
    );
  }
}

export default Panel;
