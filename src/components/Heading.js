import React from "react";
import { Box, Heading as GrommetHeading, Button } from "grommet";
import { Close, User, Add, Login } from "grommet-icons";

const Heading = props => (
  <Box direction="row" align="center" justify="between" flex={false}>
    <GrommetHeading size="small">{props.title}</GrommetHeading>
    <Box direction="row" flex={false} gap="xsmall" margin={{ left: "xsmall" }}>
      {props.user ? (
        <Button
          icon={<User />}
          onClick={props.toggleUser}
          title={props.user.displayName}
          plain
        />
      ) : (
        <Button
          icon={<Login />}
          onClick={props.toggleUser}
          title="Log in"
          plain
        />
      )}
      {props.user && (
        <Button
          icon={<Add />}
          onClick={props.toggleCreateCafe}
          title="Add a new cafe"
          plain
        />
      )}
      <Button onClick={props.togglePanel} title="Close">
        <Close />
      </Button>
    </Box>
  </Box>
);

export default Heading;
