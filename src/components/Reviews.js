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

  handleClick = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { properties } = this.props.cafe;
    const { reviews } = properties;
    const { open } = this.state;
    return (
      <Box flex={false}>
        {!reviews ||
        Object.keys(reviews).find(
          id => reviews[id].user.uid === this.props.user.uid
        ) === undefined ? (
          <>
            <Button
              icon={open ? <Close /> : <Edit />}
              label={open ? "close" : "write a review"}
              onClick={this.handleClick}
            />
            <Collapsible open={open}>
              <Box pad="xsmall">
                <CreateReview
                  user={this.props.user}
                  name={properties.name}
                  id={properties.createdAt}
                  createReview={this.props.createReview}
                />
              </Box>
            </Collapsible>
          </>
        ) : (
          <>
            <Button
              icon={open ? <Close /> : <Edit />}
              label={open ? "close" : "edit your review"}
              onClick={this.handleClick}
            />
            <Collapsible open={open}>
              <Box pad="xsmall">
                <UpdateReview
                  review={
                    reviews[
                      Object.keys(reviews).find(
                        id => reviews[id].user.uid === this.props.user.uid
                      )
                    ]
                  }
                  id={properties.createdAt}
                  updateReview={this.props.updateReview}
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
