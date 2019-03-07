import React, { Component } from "react";
import { Box, Text, Paragraph, Heading, Button, Collapsible } from "grommet";
import { Edit, Close, Trash } from "grommet-icons";
import { formatDate } from "../helpers";
import Rating from "./Rating";
import UpdateReview from "./UpdateReview";

const ReviewHeading = props => {
  const you = props.user && props.user.uid === props.review.user.uid;
  return (
    <Heading margin="none" color={you ? "brand" : ""} level={4}>
      {you ? `You` : props.review.user.displayName}
    </Heading>
  );
};

class Review extends Component {
  state = {
    edit: false
  };

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
        {this.state.edit ? (
          <>
            <Box direction="row" margin={{ top: "small" }}>
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
        ) : (
          <>
            <Box direction="row" gap="xsmall" align="center">
              <ReviewHeading user={user} review={review} />
              <Rating rating={review.rating} size="medium" />
            </Box>
            <Text size="small">{date}</Text>
            <Paragraph margin={{ top: "small", bottom: "none" }}>
              {review.text}
            </Paragraph>
          </>
        )}
      </Box>
    );
  }
}

export default Review;
