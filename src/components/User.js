import React from "react";
import { Layer, Box, Heading, Button } from "grommet";
import { ThemeContext } from "grommet/contexts";
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
        <Box direction="row" align="center" justify="between">
          <Heading level={3} margin="none">
            {props.user
              ? `Hey ${props.user.displayName}!`
              : `Join the movement`}
          </Heading>
          <Button icon={<Close />} onClick={props.toggleUser} />
        </Box>
        {/* TODO display message here if user has opened the layer by attempting to write a review */}
        {props.user ? (
          <Logout logout={props.logout} />
        ) : (
          <Login login={props.login} />
        )}
      </Box>
    </Layer>
  </ThemeContext.Extend>
);

export default User;
