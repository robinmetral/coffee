import React, { Component } from "react";
import { ThemeContext, Layer, Box } from "grommet";
import CreateCafe from "./CreateCafe";
import Cafe from "./Cafe";

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
          <Cafe
            cafe={this.props.cafe}
            clicked={this.props.clicked}
            createReview={this.props.createReview}
            togglePanel={this.props.togglePanel}
          />
        </Layer>
      </ThemeContext.Extend>
    );
  }
}

export default Panel;
