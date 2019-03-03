import React from "react";
import { Box, Text, Paragraph } from "grommet";
import { formatDate } from "../helpers";

const Review = props => {
  const { createdAt, rating, text, user } = props.review;
  const date = formatDate(createdAt);
  return (
    <Box>
      <Text>{user.displayName} | {rating}</Text>
      <Text>{date}</Text>
      <Paragraph>{text}</Paragraph>
    </Box>
  );
};

export default Review;
