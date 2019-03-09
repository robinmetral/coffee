import React from "react";
import { Box, Paragraph, Text } from "grommet";
import { Info } from "grommet-icons";

const Welcome = props => {
  return (
    <Box flex={false}>
      <Paragraph>
        Welcome to Mapping Coffee! We're on a mission to give specialty coffee
        the map it deserves.
      </Paragraph>
      <Box direction="row" align="center" gap="small">
        <Info />
        <Text>Click a marker on the map to get started!</Text>
      </Box>
    </Box>
  );
};

export default Welcome;
