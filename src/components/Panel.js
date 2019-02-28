import React, { Component } from "react";
import { ThemeContext, Layer, Box } from "grommet";
import CreateCafe from "./CreateCafe";
import Cafe from "./Cafe";
import SignUp from "./SignUp";

class Panel extends Component {
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
        <Layer
          position="right"
          full="vertical"
          modal={false}
          onEsc={this.props.togglePanel}
        >
          <Box>
            <SignUp />
            <Cafe cafe={this.props.cafe} clicked={this.props.clicked} />
            <CreateCafe createCafe={this.props.createCafe} />
          </Box>
        </Layer>
      </ThemeContext.Extend>
    );
  }
}

export default Panel;
