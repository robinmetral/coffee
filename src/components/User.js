import React, { Component } from "react";
import { Layer, Box, Heading } from "grommet";
import { ThemeContext } from "../themecontext/ThemeContext";
import Auth from "./Auth";

class User extends Component {
  render() {
    return (
      <ThemeContext.Extend
        value={{
          layer: {
            zIndex: "1100",
            container: {
              zIndex: "1100"
            }
          }
        }}
      >
        <Layer
          onEsc={() => this.props.toggleUser()}
          onClickOutside={() => this.props.toggleUser()}
        >
          <Box pad="medium" gap="small" width="medium">
            <Heading level={3} margin="none">
              Add a cafe
            </Heading>
            <Auth
              user={this.props.user}
              login={this.props.login}
              logout={this.props.logout}
            />
          </Box>
        </Layer>
      </ThemeContext.Extend>
    );
  }
}

export default User;
