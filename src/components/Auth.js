import React from "react";
import { Box } from "grommet";
import Login from "./Login";
import Logout from "./Logout";

const Auth = props => {
  return (
    <Box flex={false} direction="row" align="center">
      {props.user ? (
        <Logout displayName={props.user.displayName} logout={props.logout} />
      ) : (
        <Login login={props.login} />
      )}
    </Box>
  );
};

export default Auth;
