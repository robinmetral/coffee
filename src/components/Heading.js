import React from "react";
import { Box, Heading as GrommetHeading, Button } from "grommet";
import { Close, User, Add, Login } from "grommet-icons";

const Heading = props => (
  <Box direction="row" align="center" justify="between">
    <GrommetHeading size="small" margin={{ vertical: "small" }}>
      {props.title}
    </GrommetHeading>
    <Box direction="row">
      {props.user ? (
        <Button
          icon={<User />}
          onClick={props.toggleUser}
          title={props.user.displayName}
        />
      ) : (
        <Button icon={<Login />} onClick={props.toggleUser} title="Log in" />
      )}
      {props.user && (
        <Button
          icon={<Add />}
          onClick={props.toggleCreateCafe}
          title="Add a new cafe"
        />
      )}
      <Button icon={<Close />} onClick={props.togglePanel} title="Close" />
    </Box>
  </Box>
);

export default Heading;
