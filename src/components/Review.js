import React from "react";
import { Box, Text, Paragraph } from "grommet";
import { formatDate } from "../helpers";
import Rating from "./Rating";

const Review = props => {
  const { createdAt, rating, text, user } = props.review;
  const date = formatDate(createdAt);
  return (
    <Box>
      <Box direction="row" gap="xsmall">
        <Text>{user.displayName}</Text>
        <Rating rating={rating} size="medium" />
      </Box>
      <Text>{date}</Text>
      <Paragraph>{text}</Paragraph>
    </Box>
  );
};

export default Review;
