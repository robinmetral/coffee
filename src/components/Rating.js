import React from "react";
import { Box } from "grommet";
import { Star } from "grommet-icons";

const Rating = props => (
  <Box direction="row">
    {[...Array(props.rating)].map((star, key) => (
      <Star size={props.size || `medium`} key={key} />
    ))}
  </Box>
);

export default Rating;
