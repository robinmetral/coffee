import React from "react";
import { Anchor, Text, Box } from "grommet";
import { Home, Link, Clock, Java, Wifi, WifiNone } from "grommet-icons";
import { formatAddress } from "../helpers";

const Info = props => {
  const { cafe } = props;
  const address = formatAddress(cafe);
  const {
    url,
    openingHours,
    nodeId,
    microroasting,
    servesFilter,
    servesEspresso,
    internetAccess
  } = cafe.properties;
  return (
    <>
      <Anchor
        icon={<Home />}
        label={address}
        href={`https://www.openstreetmap.org/node/${nodeId}`}
      />
      <Anchor icon={<Link />} label={new URL(url).hostname} href={url} />
      <Box direction="row" margin={{bottom:"xxsmall"}}>
        <Clock />
        <Text margin={{ left: "small" }}>{openingHours}</Text>
      </Box>
      <Box direction="row" margin={{bottom:"xxsmall"}}>
        {internetAccess ? <Wifi /> : <WifiNone />}
        <Text margin={{ left: "small" }}>
          {internetAccess ? `Internet` : `No internet`}
        </Text>
      </Box>
      <Box direction="row">
        <Java />
        <Text margin={{ left: "small" }}>
          {microroasting && `microroasting`}
          {servesFilter && `filter`}
          {servesEspresso && `espresso`}
        </Text>
      </Box>
    </>
  );
};

export default Info;
