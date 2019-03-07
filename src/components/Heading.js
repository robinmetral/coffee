import React from "react";
import { Box, Heading as GrommetHeading, Button } from "grommet";
import { Close, User } from "grommet-icons";

// TODO wire up login button with login methods
const Heading = props => (
  <Box direction="row" align="center" justify="between">
    <GrommetHeading size="small" margin={{ bottom: "small" }}>
      {props.title}
    </GrommetHeading>
    <Box direction="row">
      <Button icon={<User />} title="Log in" />
      <Button icon={<Close />} onClick={props.togglePanel} title="Close" />
    </Box>
  </Box>
);

export default Heading;
