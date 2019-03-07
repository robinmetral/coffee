import React from "react";
import { Box, Heading as GrommetHeading, Button } from "grommet";
import { Close, User, Add } from "grommet-icons";

const Heading = props => (
  <Box direction="row" align="center" justify="between">
    <GrommetHeading size="small" margin={{ bottom: "small" }}>
      {props.title}
    </GrommetHeading>
    <Box direction="row">
      <Button icon={<User />} onClick={props.toggleUser} title="Log in" />
      <Button
        icon={<Add />}
        onClick={props.toggleCreateCafe}
        title="Add a new cafe"
      />
      <Button icon={<Close />} onClick={props.togglePanel} title="Close" />
    </Box>
  </Box>
);

export default Heading;
