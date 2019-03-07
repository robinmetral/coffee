import React from "react";
import { Box, Heading as GrommetHeading, Button } from "grommet";
import { Close, Login } from "grommet-icons";

const Heading = props => (
  <Box direction="row" align="center" justify="between">
    <GrommetHeading size="small" margin={{ bottom: "small" }}>
      {props.title}
    </GrommetHeading>
    <Box direction="row">
      <Button icon={<Login />} />
      <Button icon={<Close />} onClick={props.togglePanel} />
    </Box>
  </Box>
);

export default Heading;
