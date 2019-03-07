import React, { Component } from "react";
import { Layer, Box } from "grommet";
import Cafe from "./Cafe";
import Welcome from "./Welcome";
import Heading from "./Heading";
import CreateCafe from "./CreateCafe";
import User from "./User";
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
    // TODO reinstate fullscreen panel breakpoint
    // TODO on small screens panel content is squished, use flex={false}
    return (
      <ThemeContext.Extend
        value={{
          layer: {
            container: {
              zIndex: "1000"
            },
            responsiveBreakpoint: undefined
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
              user={this.props.user}
            />
            {this.props.cafe ? (
              <Cafe
                cafe={this.props.cafe}
                user={this.props.user}
                createReview={this.props.createReview}
                updateReview={this.props.updateReview}
                deleteReview={this.props.deleteReview}
                togglePanel={this.props.togglePanel}
                createCafe={this.props.createCafe}
              />
            ) : (
              <Welcome togglePanel={this.props.togglePanel} />
            )}
          </Box>
        </Layer>

        {this.state.createCafeOpen && (
          <CreateCafe
            createCafe={this.props.createCafe}
            toggleCreateCafe={this.toggleCreateCafe}
          />
        )}

        {this.state.userOpen && (
          <User
            user={this.props.user}
            login={this.props.login}
            logout={this.props.logout}
            toggleUser={this.toggleUser}
          />
        )}
      </ThemeContext.Extend>
    );
  }
}

export default Panel;
