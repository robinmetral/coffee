import React from "react";
import { Box, Text, Paragraph, Heading } from "grommet";
import { formatDate } from "../helpers";
import Rating from "./Rating";

const Review = props => {
  const { review, user } = props;
  const date = formatDate(review.createdAt);
  // TODO display current user as "You" and highlight color
  return (
    <Box pad="small" border round="small">
      <Box direction="row" gap="xsmall" align="center">
        <Heading margin="none" level={4}>
          {user && user.uid === review.user.uid
            ? "You"
            : review.user.displayName}
        </Heading>
        <Rating rating={review.rating} size="medium" />
      </Box>
      <Text size="small">{date}</Text>
      <Paragraph margin={{ top: "small", bottom: "none" }}>
        {review.text}
      </Paragraph>
    </Box>
  );
};

export default Review;
