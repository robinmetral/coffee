import React from "react";
import { Box, Heading } from "grommet";
import Review from "./Review";
import CreateReview from "./CreateReview";

const Reviews = props => {
  const { properties } = props.cafe;
  const { reviews } = properties;
  return (
    <Box>
      {reviews && (
        <Box>
          <Heading level="2" size="small">
            {Object.keys(reviews).length} reviews
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
