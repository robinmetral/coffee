import React from "react";
import { Text } from "grommet";
import { formatAddress } from "../helpers";

const Info = props => {
  const { cafe } = props;
  const { name } = cafe.properties;
  const address = formatAddress(cafe);
  return (
    <>
      <Text>{address}</Text>
    </>
  );
};

export default Info;
