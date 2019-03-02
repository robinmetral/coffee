import React from "react";
import { Anchor, Text, Box } from "grommet";
import {
  Home,
  Link,
  Clock,
  Java,
  Wifi,
  WifiNone,
  StatusGood,
  StatusCritical
} from "grommet-icons";
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
      {/* address */}
      {address && (
        <Anchor
          icon={<Home />}
          label={address}
          href={`https://www.openstreetmap.org/node/${nodeId}`}
        />
      )}

      {/* url */}
      {url && (
        <Anchor icon={<Link />} label={new URL(url).hostname} href={url} />
      )}

      {/* opening hours */}
      {openingHours && (
        <Box direction="row" margin={{ bottom: "xxsmall" }}>
          <Clock />
          <Text margin={{ left: "small" }}>{openingHours}</Text>
        </Box>
      )}

      {/* internet */}
      {internetAccess === (true || false) && (
        <Box direction="row" margin={{ bottom: "xxsmall" }}>
          {internetAccess ? (
            <>
              <Wifi />
              <Text margin={{ left: "small" }}>
                <Box direction="row" gap="xxsmall">
                  <Text>Internet</Text>
                  <StatusGood size="medium" color="status-ok" />
                </Box>
              </Text>
            </>
          ) : (
            <>
              <WifiNone />
              <Text>
                <Box direction="row" gap="xxsmall">
                  <Text>No internet</Text>
                  <StatusCritical size="medium" color="status-error" />
                </Box>
              </Text>
            </>
          )}
        </Box>
      )}

      {/* coffee */}
      {(microroasting || servesFilter || servesEspresso) && (
        <Box direction="row">
          <Java />
          <Box margin={{ left: "small" }}>
            {microroasting === true && (
              <Box direction="row" gap="xxsmall">
                <Text>Microroasters</Text>
                <StatusGood size="medium" color="status-ok" />
              </Box>
            )}
            {servesFilter === true && (
              <Box direction="row" gap="xxsmall">
                <Text>Filter coffee</Text>
                <StatusGood size="medium" color="status-ok" />
              </Box>
            )}
            {servesFilter === false && (
              <Box direction="row" gap="xxsmall">
                <Text>Filter coffee</Text>
                <StatusCritical size="medium" color="status-error" />
              </Box>
            )}
            {servesEspresso === true && (
              <Box direction="row" gap="xxsmall">
                <Text>Espresso-based coffee</Text>
                <StatusGood size="medium" color="status-ok" />
              </Box>
            )}
            {servesEspresso === false && (
              <Box direction="row" gap="xxsmall">
                <Text>Espresso-based coffee</Text>
                <StatusCritical size="medium" color="status-ok" />
              </Box>
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Info;
