import React from "react";
import { Box, Heading } from "grommet";
import Review from "./Review";
import CreateReview from "./CreateReview";
import { numberToWord } from "../helpers";

const Reviews = props => {
  const { properties } = props.cafe;
  const { reviews } = properties;
  return (
    <Box>
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
      <Box>
        <Heading level="3" size="small">
          add a review
        </Heading>
        <CreateReview
          name={properties.name}
          id={properties.createdAt}
          createReview={props.createReview}
        />
      </Box>
    </Box>
  );
};

export default Reviews;
