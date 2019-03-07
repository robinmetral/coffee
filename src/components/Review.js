import React, { Component } from "react";
import { Box, Text, Paragraph, Heading, Button } from "grommet";
import { Edit, Trash } from "grommet-icons";
import { formatDate } from "../helpers";
import Rating from "./Rating";
import UpdateReview from "./UpdateReview";

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
    const { review, id, user, updateReview } = this.props;
    const date = formatDate(review.createdAt);
    const you = user && user.uid === review.user.uid;
    return (
      <Box pad="small" border round="small">
        {this.state.edit ? (
          <Box pad="xsmall">
            <UpdateReview review={review} id={id} updateReview={updateReview} />
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
              <Box direction="row" margin={{ left: "auto" }}>
                <Button
                  margin="none"
                  icon={<Edit />}
                  onClick={() => this.setState({ edit: true })}
                />
                <Button
                  margin="none"
                  icon={<Trash />}
                  onClick={this.handleDelete}
                />
              </Box>
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
