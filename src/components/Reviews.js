import React, { Component } from "react";
import { Box, Heading, Button, Collapsible } from "grommet";
import { Close, Edit } from "grommet-icons";
import Review from "./Review";
import CreateReview from "./CreateReview";
import { numberToWord } from "../helpers";

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
      <Box flex="false">
        {reviews && (
          <Box>
            <Heading level="2" size="small">
              {numberToWord(Object.keys(reviews).length)} review
              {Object.keys(reviews).length < 2 ? "" : "s"}
            </Heading>
            {Object.keys(reviews).map(id => (
              <Review
                createdAt={reviews[id].createdAt}
                rating={reviews[id].rating}
                text={reviews[id].text}
              />
            ))}
          </Box>
        )}
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
      </Box>
    );
  }
}

export default Reviews;
