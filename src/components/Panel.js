import React, { Component } from "react";
import { Layer, Box } from "grommet";
import Cafe from "./Cafe";
import Welcome from "./Welcome";
import Heading from "./Heading";
import { ThemeContext } from "../themecontext/ThemeContext";

class Panel extends Component {
  state = {
    createCafeOpen: false,
    userOpen: false
  };

  toggleCreateCafe = () => {
    this.setState({ createCafeOpen: !this.state.createCafeOpen });
  };

  toggleUser = () => {
    this.setState({ userOpen: !this.state.userOpen });
  };

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
          <Box
            width="medium"
            elevation="large"
            fill="vertical"
            overflow="auto"
            pad={{ horizontal: "medium" }}
          >
            <Heading
              title={
                this.props.cafe
                  ? this.props.cafe.properties.name
                  : `Mapping Coffee`
              }
              togglePanel={this.props.togglePanel}
              toggleCreateCafe={this.toggleCreateCafe}
              toggleUser={this.toggleUser}
            />
            {this.props.cafe ? (
              <Cafe
                cafe={this.props.cafe}
                user={this.props.user}
                createReview={this.props.createReview}
                updateReview={this.props.updateReview}
                deleteReview={this.props.deleteReview}
                togglePanel={this.props.togglePanel}
                login={this.props.login}
                logout={this.props.logout}
                createCafe={this.props.createCafe}
              />
            ) : (
              <Welcome togglePanel={this.props.togglePanel} />
            )}
          </Box>
        </Layer>
      </ThemeContext.Extend>
    );
  }
}

export default Panel;
