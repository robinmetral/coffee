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
    <Box flex="false">
      <Box direction="row" align="center" justify="between">
        <Heading size="small" margin={{ bottom: "small" }}>
          {props.cafe.properties.name}
        </Heading>
        <Button icon={<FormClose />} onClick={props.togglePanel} />
      </Box>
      <Box>
        <Info cafe={props.cafe} />
      </Box>
      <Box>
        <Reviews
          cafe={props.cafe}
          user={props.user}
          createReview={props.createReview}
        />
      </Box>
    </Box>
  );
};

export default Cafe;
