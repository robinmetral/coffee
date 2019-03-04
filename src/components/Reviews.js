import React, { Component } from "react";
import { Box, Heading, Button, Collapsible, Text } from "grommet";
import { Close, Edit } from "grommet-icons";
import Review from "./Review";
import CreateReview from "./CreateReview";
import UpdateReview from "./UpdateReview";
import Rating from "./Rating";
import { numberToWord, averageRating } from "../helpers";

class Reviews extends Component {
  state = {
    open: false
  };

  toggleForm = () => {
    const open = this.state.open;
    this.setState({ open: !open });
  };

  closeForm = () => {
    this.setState({ open: false });
  };

  render() {
    const { properties } = this.props.cafe;
    const { reviews } = properties;
    const { open } = this.state;
    return (
      <Box flex={false}>
        {!reviews ||
        Object.values(reviews).find(
          review => review.user.uid === this.props.user.uid
        ) === undefined ? (
          <>
            <Button
              icon={open ? <Close /> : <Edit />}
              label={open ? "close" : "write a review"}
              onClick={this.toggleForm}
            />
            <Collapsible open={open}>
              <Box pad="xsmall">
                <CreateReview
                  user={this.props.user}
                  name={properties.name}
                  id={properties.createdAt}
                  createReview={this.props.createReview}
                  closeForm={this.closeForm}
                />
              </Box>
            </Collapsible>
          </>
        ) : (
          <>
            <Button
              icon={open ? <Close /> : <Edit />}
              label={open ? "close" : "edit your review"}
              onClick={this.toggleForm}
            />
            <Collapsible open={open}>
              <Box pad="xsmall">
                <UpdateReview
                  review={Object.values(reviews).find(
                    review => review.user.uid === this.props.user.uid
                  )}
                  id={properties.createdAt}
                  updateReview={this.props.updateReview}
                  deleteReview={this.props.deleteReview}
                  closeeForm={this.closeForm}
                />
              </Box>
            </Collapsible>
          </>
        )}
        {reviews && (
          <Box>
            <Heading level="2" size="small">
              {numberToWord(Object.keys(reviews).length)} review
              {Object.keys(reviews).length < 2 ? "" : "s"}
            </Heading>
            <Box direction="row" gap="xsmall">
              <Rating rating={averageRating(reviews)} />
              <Text>{averageRating(reviews)}</Text>
            </Box>
            {Object.keys(reviews).map((id, key) => (
              <Review review={reviews[id]} key={key} />
            ))}
          </Box>
        )}
      </Box>
    );
  }
}

export default Reviews;
