import React, { Component } from "react";
import { Layer as GrommetLayer, Box } from "grommet";
import CreateCafe from "./CreateCafe";
import ViewCafe from "./ViewCafe";
import SignUp from "./SignUp";

class Layer extends Component {
  render() {
    if (!this.props.open) return null;
    return (
      <GrommetLayer
        position="right"
        full="vertical"
        modal={false}
        onClickOutside={this.props.toggleLayer}
        onEsc={this.props.toggleLayer}
      >
        <Box>
          <SignUp />
          <ViewCafe cafe={this.props.cafe} clicked={this.props.clicked} />
          <CreateCafe createCafe={this.props.createCafe} />
        </Box>
      </GrommetLayer>
    );
  }
}

export default Layer;
