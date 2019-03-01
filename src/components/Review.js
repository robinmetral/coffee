import React from "react";
import { Box, Text } from "grommet";

const Review = props => {
  const { createdAt, rating, text } = props;
  const timestamp = new Date(createdAt);
  const date = timestamp.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const time = timestamp.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric"
  });
  return (
    <Box>
      <Text>Someone | {rating}</Text>
      <Text>
        {date} at {time}
      </Text>
      <Text>{text}</Text>
    </Box>
  );
};

export default Review;
