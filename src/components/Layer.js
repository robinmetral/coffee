import React, { Component } from "react";
import { Layer as GrommetLayer } from "grommet";
import CreateCafe from "./CreateCafe";
import ViewCafe from "./ViewCafe";
import SignUp from "./SignUp";

class Layer extends Component {
  state = { open: true };
  render() {
    return (
      <GrommetLayer position="right" full="vertical" modal={false}>
        <SignUp />
        <ViewCafe cafe={this.props.cafe} clicked={this.props.clicked} />
        <CreateCafe createCafe={this.props.createCafe} />
      </GrommetLayer>
    );
  }
}

export default Layer;
