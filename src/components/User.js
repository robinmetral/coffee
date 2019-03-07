import React, { Component } from "react";
import { Layer, Box, Heading } from "grommet";
import { ThemeContext } from "../themecontext/ThemeContext";
import Login from "./Login";
import Logout from "./Logout";

// TODO make a SFC
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
              {this.props.user
                ? `Hey ${this.props.user.displayName}!`
                : `Join the movement`}
            </Heading>
            {props.user ? (
              <Logout
                displayName={props.user.displayName}
                logout={props.logout}
              />
            ) : (
              <Login login={props.login} />
            )}
          </Box>
        </Layer>
      </ThemeContext.Extend>
    );
  }
}

export default User;
