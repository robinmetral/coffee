import React from "react";
import { Box, Paragraph, Text } from "grommet";
import { Info } from "grommet-icons";
import Heading from "./Heading";

const Welcome = props => {
  return (
    <Box flex={false}>
      <Heading title="Mapping Coffee" togglePanel={props.togglePanel} />
      <Paragraph>
        Welcome to Mapping Coffee! We're on a mission to give specialty coffee
        the map it deserves.
      </Paragraph>
      <Box direction="row" align="center" gap="small">
        <Info />
        <Text>
          Click a marker on the map to get started and log in to write your own
          review!
        </Text>
      </Box>
    </Box>
  );
};

export default Welcome;
