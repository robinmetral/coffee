import React from "react";
import { Box } from "grommet";
import { Star } from "grommet-icons";

const Rating = props => (
  <Box direction="row">
    {[...Array(props.rating)].map((star, key) => (
      <Star size={props.size || "medium"} color="accent-4" key={key} />
    ))}
    {[...Array(5 - props.rating)].map((star, key) => (
      <Star size={props.size || "medium"} color="light-4" key={key} />
    ))}
  </Box>
);

export default Rating;
