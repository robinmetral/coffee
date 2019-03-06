import React from "react";
import { Box, Heading, Paragraph } from "grommet";

const Welcome = props => {
  return (
    <Box flex={false}>
      <Heading size="small" margin={{ bottom: "small" }}>
        {props.title}
      </Heading>
      <Paragraph>
        Welcome to Mapping Coffee! We're on a mission to give specialty coffee
        shops the map they deserve. Click a marker on the map to get started,
        and log in to add your reviews and new coffee shops to the map!
      </Paragraph>
    </Box>
  );
};

export default Welcome;
