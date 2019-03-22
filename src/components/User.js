import React from "react";
import { Layer, Box, Heading, Button, ThemeContext } from "grommet";
import { Close } from "grommet-icons";
import Login from "./Login";
import Logout from "./Logout";

const User = props => (
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
      onEsc={() => props.toggleUser()}
      onClickOutside={() => props.toggleUser()}
    >
      <Box pad="medium" gap="small" width="medium">
        <Heading level={3} margin="none">
          {props.user ? `Logged in as ${props.user.name}` : `Join the movement`}
        </Heading>
        {props.user ? (
          <Logout logout={props.logout} />
        ) : (
          <Login authHandler={props.authHandler} />
        )}
        <Button primary icon={<Close />} label="Close" onClick={props.toggleUser} />
      </Box>
    </Layer>
  </ThemeContext.Extend>
);

export default User;
