import React, { Component } from "react";
import { ThemeContext, Layer as GrommetLayer, Box } from "grommet";
import CreateCafe from "./CreateCafe";
import Cafe from "./Cafe";
import SignUp from "./SignUp";

class Layer extends Component {
  render() {
    if (!this.props.open) return null;
    return (
      <ThemeContext.Extend
        value={{
          layer: {
            container: {
              zIndex: "1000"
            }
          }
        }}
      >
        <GrommetLayer
          position="right"
          full="vertical"
          modal={false}
          onClickOutside={this.props.toggleLayer}
          onEsc={this.props.toggleLayer}
        >
          <Box>
            <SignUp />
            <Cafe cafe={this.props.cafe} clicked={this.props.clicked} />
            <CreateCafe createCafe={this.props.createCafe} />
          </Box>
        </GrommetLayer>
      </ThemeContext.Extend>
    );
  }
}

export default Layer;
