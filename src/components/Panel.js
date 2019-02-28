import React, { Component } from "react";

import CreateCafe from "./CreateCafe";
import ViewCafe from "./ViewCafe";
import SignUp from "./SignUp";

class Panel extends Component {
  render() {
    return (
      <div>
        <SignUp />
        <ViewCafe cafe={this.props.cafe} clicked={this.props.clicked} />
        <CreateCafe createCafe={this.props.createCafe} />
      </div>
    );
  }
}

export default Panel;
