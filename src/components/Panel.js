import React, { Component } from "react";
import { Layer, Box } from "grommet";
import Cafe from "./Cafe";
import Welcome from "./Welcome";
import CreateCafe from "./CreateCafe";
import Auth from "./Auth";
import { ThemeContext } from "../themecontext/ThemeContext";

class Panel extends Component {
  state = {
    createCafeOpen: false
  };

  toggleCreateCafe = () => {
    const createCafeOpen = this.state.createCafeOpen ? false : true;
    this.setState({ createCafeOpen });
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
            {this.props.cafe ? (
              <Cafe
                cafe={this.props.cafe}
                user={this.props.user}
                createReview={this.props.createReview}
                updateReview={this.props.updateReview}
                deleteReview={this.props.deleteReview}
                togglePanel={this.props.togglePanel}
              />
            ) : (
              <Welcome togglePanel={this.props.togglePanel} />
            )}
            <Auth
              user={this.props.user}
              login={this.props.login}
              logout={this.props.logout}
            />
            {this.props.user && (
              <CreateCafe
                createCafe={this.props.createCafe}
                toggleCreateCafe={this.toggleCreateCafe}
                open={this.state.createCafeOpen}
              />
            )}
          </Box>
        </Layer>
      </ThemeContext.Extend>
    );
  }
}

export default Panel;
