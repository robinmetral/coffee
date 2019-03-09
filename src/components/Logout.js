import React from "react";
import { Button } from "grommet";
import { Logout as LogoutIcon } from "grommet-icons";

const Logout = props => {
  return (
    <Button
      icon={<LogoutIcon />}
      label="Log out"
      onClick={() => props.logout()}
    />
  );
};

export default Logout;
