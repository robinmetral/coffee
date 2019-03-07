import React, { Component } from "react";
import { Layer, Box, Heading, Button } from "grommet";
import { Close } from "grommet-icons";
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
            <Box direction="row" align="center" justify="between">
              <Heading level={3} margin="none">
                {this.props.user
                  ? `Hey ${this.props.user.displayName}!`
                  : `Join the movement`}
              </Heading>
              <Button icon={<Close />} onClick={this.props.toggleUser} />
            </Box>
            {this.props.user ? (
              <Logout logout={this.props.logout} />
            ) : (
              <Login login={this.props.login} />
            )}
          </Box>
        </Layer>
      </ThemeContext.Extend>
    );
  }
}

export default User;
