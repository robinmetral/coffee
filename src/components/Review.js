import React from "react";
import { Box, Text, Paragraph, Heading } from "grommet";
import { formatDate } from "../helpers";
import Rating from "./Rating";

const Review = props => {
  const { createdAt, rating, text, user } = props.review;
  const date = formatDate(createdAt);
  // TODO display current user as "You" and highlight color
  return (
    <Box pad="small" border round="small">
      <Box direction="row" gap="xsmall" align="center">
        <Heading margin="none" level={4}>
          {user.displayName}
        </Heading>
        <Rating rating={rating} size="medium" />
      </Box>
      <Text size="small">{date}</Text>
      <Paragraph margin={{ top: "small", bottom: "none" }}>{text}</Paragraph>
    </Box>
  );
};

export default Review;
