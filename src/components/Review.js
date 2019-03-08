import React, { Component } from "react";
import { Layer, Box, Text, Paragraph, Heading, Button } from "grommet";
import { ThemeContext } from "grommet/contexts";
import { Edit, Trash, Close } from "grommet-icons";
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

  // TODO confirm user wants to delete
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
                <Box direction="row" margin={{ left: "auto" }}>
                  {/* TODO why doesn't plain override global Button styles? */}
                  <Button
                    plain
                    icon={<Edit />}
                    onClick={this.toggleEdit}
                    title="Edit"
                  />
                  <Button
                    plain
                    icon={<Trash />}
                    onClick={() => this.setState({ confirmDelete: true })}
                    title="Delete"
                  />
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
            toBeDeleted="your review"
          />
        )}
      </Box>
    );
  }
}

export default Review;
