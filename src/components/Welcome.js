import React from "react";
import { Box, Paragraph } from "grommet";
import Heading from "./Heading";

const Welcome = props => {
  return (
    <Box flex={false}>
      <Heading title="Mapping Coffee" togglePanel={props.togglePanel} />
      <Paragraph>
        Welcome to Mapping Coffee! We're on a mission to give specialty coffee
        shops the map they deserve.
      </Paragraph>
    </Box>
  );
};

export default Welcome;
