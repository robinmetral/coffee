import React from "react";
import { Anchor, Text, Box } from "grommet";
import { Home, Link, Clock } from "grommet-icons";
import { formatAddress } from "../helpers";

const Info = props => {
  const { cafe } = props;
  const address = formatAddress(cafe);
  const { url, openingHours, nodeId } = cafe.properties;
  return (
    <>
      <Anchor
        icon={<Home />}
        label={address}
        href={`https://www.openstreetmap.org/node/${nodeId}`}
      />
      <Anchor icon={<Link />} label={new URL(url).hostname} href={url} />
      <Box direction="row">
        <Clock />
        <Text margin={{left: "small"}}>{openingHours}</Text>
      </Box>
    </>
  );
};

export default Info;
