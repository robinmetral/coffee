import React, { Component } from "react";
import { Box, Text, Paragraph, Heading, Button, Collapsible } from "grommet";
import { Edit, Close, Trash } from "grommet-icons";
import { formatDate } from "../helpers";
import Rating from "./Rating";
import UpdateReview from "./UpdateReview";

class Review extends Component {
  handleDelete = () => {
    // call delete method
    this.props.deleteReview(this.props.id, this.props.review.createdAt);
    // close form
    this.props.closeForm();
  };

  render() {
    const { review, id, user, open, toggleForm, updateReview } = this.props;
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
        {user && user.uid === review.user.uid && (
          <>
            <Box direction="row">
              <Button
                icon={open ? <Close /> : <Edit />}
                label={open ? "Close" : "Edit"}
                onClick={toggleForm}
              />
              <Button
                icon={<Trash />}
                label="Delete"
                color="status-critical"
                onClick={() => this.handleDelete()}
              />
            </Box>
            <Collapsible open={open}>
              <Box pad="xsmall">
                <UpdateReview
                  review={review}
                  id={id}
                  updateReview={updateReview}
                />
              </Box>
            </Collapsible>
          </>
        )}
      </Box>
    );
  }
}

export default Review;
