import React from "react";
import { Box } from "grommet";
import { Star, StarHalf } from "grommet-icons";

const Rating = props => {
  const { rating, size } = props;
  const lit = Math.floor(rating);
  const unlit = Math.floor(5 - rating);
  return (
    <Box direction="row">
      {[...Array(lit)].map((star, key) => (
        <Star size={size || "medium"} color="accent-4" key={key} />
      ))}
      {rating % 1 !== 0 && (
        <StarHalf size={size || "medium"} color="accent-4" />
      )}
      {[...Array(unlit)].map((star, key) => (
        <Star size={size || "medium"} color="light-4" key={key} />
      ))}
    </Box>
  );
};
export default Rating;
