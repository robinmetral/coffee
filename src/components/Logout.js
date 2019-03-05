import React from "react";
import { Text, Button } from "grommet";
import { Logout as LogoutIcon } from "grommet-icons";

const Logout = props => {
  return (
    <>
      <Text>Hey {props.displayName}!</Text>
      <Button
        icon={<LogoutIcon />}
        label="Log out"
        onClick={() => props.logout()}
      />
    </>
  );
};

export default Logout;
