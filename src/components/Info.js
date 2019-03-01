import React from "react";
import { Box, Text } from "grommet";
import { Home, Link, Clock } from "grommet-icons";
import { formatAddress } from "../helpers";

const Info = props => {
  const { cafe } = props;
  const address = formatAddress(cafe);
  const { url, openingHours } = cafe.properties;
  return (
    <>
      <Box direction="row">
        <Home />
        <Text>{address}</Text>
      </Box>
      <Box direction="row">
        <Link />
        <Text>{url}</Text>
      </Box>
      <Box direction="row">
        <Clock />
        <Text>{openingHours}</Text>
      </Box>
    </>
  );
};

export default Info;
