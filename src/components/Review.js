import React, { Component } from "react";
import { Box, Text, Paragraph, Heading, Button } from "grommet";
import { Edit, Trash } from "grommet-icons";
import { formatDate } from "../helpers";
import Rating from "./Rating";
import UpdateReview from "./UpdateReview";
import ConfirmDelete from "./ConfirmDelete";

class Review extends Component {
  state = {
    edit: false,
    confirmDelete: false
  };

  toggleEdit = () => {
    // toggle edit status
    this.setState({ edit: !this.state.edit });
  };

  closeConfirmDelete = () => {
    this.setState({ confirmDelete: false });
  };

  handleDelete = () => {
    // call delete method
    this.props.deleteReview(this.props.id, this.props.review.createdAt);
    // close form
    this.props.closeForm();
    // close modal
    this.setState({ confirmDelete: false });
  };

  render() {
    const { review, id, user, updateReview } = this.props;
    if (!review) return null;
    const date = formatDate(review.createdAt);
    const you = user && user.uid === review.user.uid;
    return (
      <Box pad="small" border round="small">
        {this.state.edit ? (
          <Box pad="xsmall">
            <UpdateReview
              review={review}
              id={id}
              updateReview={updateReview}
              toggleEdit={this.toggleEdit}
            />
          </Box>
        ) : (
          <>
            <Box direction="row">
              <Box>
                <Heading margin="none" color={you ? "brand" : ""} level={4}>
                  {you ? `You` : review.user.displayName}
                </Heading>
                <Rating rating={review.rating} size="medium" />
              </Box>
              {you && (
                <Box direction="row" margin={{ left: "auto" }} gap="small">
                  {/* TODO why doesn't plain override global Button styles? */}
                  <Button onClick={this.toggleEdit} title="Edit">
                    <Edit />
                  </Button>
                  <Button
                    onClick={() => this.setState({ confirmDelete: true })}
                    title="Delete"
                  >
                    <Trash />
                  </Button>
                </Box>
              )}
            </Box>
            <Text size="small">{date}</Text>
            <Paragraph margin={{ top: "small", bottom: "none" }}>
              {review.text}
            </Paragraph>
          </>
        )}

        {this.state.confirmDelete && (
          <ConfirmDelete
            closeConfirmDelete={this.closeConfirmDelete}
            handleDelete={this.handleDelete}
            message="You're about to delete your review - we just want to make sure this was the plan."
          />
        )}
      </Box>
    );
  }
}

export default Review;
