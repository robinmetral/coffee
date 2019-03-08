import React, { Component } from "react";
import { Layer, Box, Text, Paragraph, Heading, Button } from "grommet";
import { ThemeContext } from "grommet/contexts";
import { Edit, Trash, Close } from "grommet-icons";
import { formatDate } from "../helpers";
import Rating from "./Rating";
import UpdateReview from "./UpdateReview";

class Review extends Component {
  state = {
    edit: false,
    confirmDelete: false
  };

  toggleEdit = () => {
    // toggle edit status
    this.setState({ edit: !this.state.edit });
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
          <ThemeContext.Extend
            value={{
              layer: {
                container: {
                  zIndex: "1100"
                },
                zIndex: "1100"
              }
            }}
          >
            <Layer
              position="center"
              modal
              onEsc={() => this.setState({ confirmDelete: false })}
              onClickOutside={() => this.setState({ confirmDelete: false })}
            >
              <Box pad="medium" gap="small" width="medium">
                <Heading level={3} margin="none">
                  Whoops...
                </Heading>
                <Text>
                  You're about to delete your review - just making sure this was
                  the plan.
                </Text>
                <Box direction="row" justify="center" gap="small">
                  <Button
                    icon={<Close />}
                    label="Cancel"
                    onClick={() => this.setState({ confirmDelete: false })}
                  />
                  <Button
                    icon={<Trash />}
                    label={
                      <Text color="white">
                        <strong>Delete</strong>
                      </Text>
                    }
                    onClick={this.handleDelete}
                    primary
                    color="status-critical"
                  />
                </Box>
              </Box>
            </Layer>
          </ThemeContext.Extend>
        )}
      </Box>
    );
  }
}

export default Review;
