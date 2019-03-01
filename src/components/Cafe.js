import React from "react";
import { Box, Heading, Button } from "grommet";
import { FormClose } from "grommet-icons";
import Info from "./Info";
import Reviews from "./Reviews";

const Cafe = props => {
  // is no cafe is passed, no cafe has been clicked
  if (!props.cafe) {
    return null;
  }
  return (
    <Box width="medium" elevation="large" fill="vertical" overflow="auto">
      <Box direction="row" align="center" justify="between" flex="false">
        <Heading size="small" margin={{ left: "small" }}>
          {props.cafe.properties.name}
        </Heading>
        <Button icon={<FormClose />} onClick={props.togglePanel} />
      </Box>
      <Box pad="small" flex="false">
        <Info cafe={props.cafe} />
      </Box>
      <Box pad="small" flex="false">
        <Reviews cafe={props.cafe} createReview={props.createReview} />
      </Box>
    </Box>
  );
};

export default Cafe;
