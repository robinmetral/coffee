import React from "react";
import { Box } from "grommet";
import { Star, StarHalf } from "grommet-icons";

const Rating = props => {
  // transform reviews into rating
  // TODO improve readability
  let rating = props.reviews
    ? Math.round(
        (Object.values(props.reviews)
          .map(review => review.rating)
          .reduce((a, b) => a + b) /
          Object.values(props.reviews).map(review => review.rating).length) *
          2
      ) / 2
    : props.rating
    ? props.rating
    : 0;

  // render
  const lit = Math.floor(rating);
  const unlit = Math.floor(5 - rating);
  return (
    <Box direction="row">
      {[...Array(lit)].map((star, key) => (
        <Star size={props.size || "medium"} color="plain" key={key} />
      ))}
      {rating % 1 !== 0 && (
        <StarHalf size={props.size || "medium"} color="plain" />
      )}
      {[...Array(unlit)].map((star, key) => (
        <Star size={props.size || "medium"} color="status-unknown" key={key} />
      ))}
    </Box>
  );
};
export default Rating;
