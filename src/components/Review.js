import React from "react";
import { Box, Text, Paragraph, Heading, Button, Collapsible } from "grommet";
import { Edit, Close } from "grommet-icons";
import { formatDate } from "../helpers";
import Rating from "./Rating";
import UpdateReview from "./UpdateReview";

const Review = props => {
  const {
    review,
    id,
    user,
    open,
    toggleForm,
    closeForm,
    updateReview,
    deleteReview
  } = props;
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
      <Paragraph margin={{ vertical: "small" }}>{review.text}</Paragraph>
      {user && user.uid == review.user.uid && (
        <>
          <Button
            icon={open ? <Close /> : <Edit />}
            label={open ? "Close" : "Edit review"}
            onClick={toggleForm}
          />
          <Collapsible open={open}>
            <Box pad="xsmall">
              <UpdateReview
                review={review}
                id={id}
                updateReview={updateReview}
                deleteReview={deleteReview}
                closeForm={closeForm}
              />
            </Box>
          </Collapsible>
        </>
      )}
    </Box>
  );
};

export default Review;
