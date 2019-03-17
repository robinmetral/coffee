import React, { Component } from "react";
import { Box, Heading, Button, Collapsible, Text } from "grommet";
import { Close, Edit } from "grommet-icons";
import Review from "./Review";
import CreateReview from "./CreateReview";
import Rating from "./Rating";
import { numberToWord, averageRating } from "../helpers";

class Reviews extends Component {
  state = {
    open: false
  };

  verifyUser = () => {
    if (this.props.user) {
      this.toggleForm();
    } else {
      this.props.toggleUser("Log in to add a review");
    }
  };

  toggleCreateReview = () => {
    this.setState({ open: !this.state.open });
  };

  closeCreateReview = () => {
    this.setState({ open: false });
  };

  render() {
    const { cafe, reviews } = this.props;
    const { open } = this.state;

    return (
      <Box flex={false}>
        <Heading level="2" size="small">
          {reviews
            ? `${numberToWord(Object.keys(reviews).length)} review${
                Object.keys(reviews).length > 1 ? `s` : ``
              }`
            : `No reviews yet`}
          <Box direction="row" gap="xsmall">
            <Rating rating={averageRating(reviews)} />
            <Text>{averageRating(reviews)}</Text>
          </Box>
        </Heading>

        {(!reviews ||
          !this.props.user ||
          Object.values(reviews).some(
            val => val.user.uid === this.props.user.uid
          ) === false) && (
          <>
            <Button
              icon={open ? <Close /> : <Edit />}
              label={open ? `Cancel` : `Write a review`}
              onClick={open ? this.toggleCreateReview : this.verifyUser}
            />
            <Collapsible open={open}>
              <Box pad="xsmall">
                <CreateReview
                  user={this.props.user}
                  name={cafe.properties.name}
                  id={cafe.properties.createdAt}
                  createReview={this.props.createReview}
                  closeCreateReview={this.closeCreateReview}
                />
              </Box>
            </Collapsible>
          </>
        )}

        {reviews && (
          <Box>
            {/* TODO order by timestamp */}
            {Object.keys(reviews).map((id, key) => (
              <Review
                review={reviews[id]}
                id={cafe.properties.createdAt}
                user={this.props.user}
                key={key}
                open={this.state.open}
                toggleCreateReview={this.toggleCreateReview}
                closeCreateReview={this.closeCreateReview}
                updateReview={this.props.updateReview}
                deleteReview={this.props.deleteReview}
              />
            ))}
          </Box>
        )}
      </Box>
    );
  }
}

export default Reviews;
