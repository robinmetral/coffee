import React, { Component } from "react";
import { ThemeContext, Layer } from "grommet";
import Cafe from "./Cafe";
import CreateCafe from "./CreateCafe";
import Login from "./Login";

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
            user={this.props.user}
            clicked={this.props.clicked}
            createReview={this.props.createReview}
            togglePanel={this.props.togglePanel}
          />
          <CreateCafe createCafe={this.props.createCafe} />
          <Login login={this.props.login} />
        </Layer>
      </ThemeContext.Extend>
    );
  }
}

export default Panel;
