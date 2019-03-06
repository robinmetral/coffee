import React from "react";
import { Box, Heading as GrommetHeading, Button } from "grommet";
import { FormClose } from "grommet-icons";

const Heading = props => (
  <Box direction="row" align="center" justify="between">
    <GrommetHeading size="small" margin={{ bottom: "small" }}>
      {props.title}
    </GrommetHeading>
    <Button icon={<FormClose />} onClick={props.togglePanel} />
  </Box>
);

export default Heading;
