import React from "react";
import { Box, Text, Paragraph, Heading } from "grommet";
import { formatDate } from "../helpers";
import Rating from "./Rating";

const Review = props => {
  const { review, user } = props;
  const date = formatDate(review.createdAt);
  return (
    <Box pad="small" border round="small">
      <Box direction="row" gap="xsmall" align="center">
        {user && user.uid === review.user.uid ? (
          <Heading margin="none" color="brand" level={4}>
            You
          </Heading>
        ) : (
          <Heading margin="none" level={4}>
            {review.user.displayName}
          </Heading>
        )}
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
