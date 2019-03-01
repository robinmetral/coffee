import React from "react";
import { Box, Text } from "grommet";

const Review = props => {
  const { createdAt, rating, text } = props;
  const date = new Date(createdAt).toDateString();
  return (
    <Box>
      <Text>
        Rated {rating} by Someone on {date}
      </Text>
      <Text>{text}</Text>
    </Box>
  );
};

export default Review;
