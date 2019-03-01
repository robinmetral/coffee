import React, { Component } from "react";
import { Box, Text } from "grommet";
import CreateReview from "./CreateReview";

const Reviews = props => {
  const { properties } = props.cafe;
  const { reviews } = properties;
  return (
    <Box>
      {reviews && (
        <Box>
          <Text>{Object.keys(reviews).length} reviews</Text>
          {Object.keys(reviews).map(id => (
            <Review
              createdAt={reviews[id].createdAt}
              rating={reviews[id].rating}
              text={reviews[id].text}
            />
          ))}
        </Box>
      )}
      <CreateReview
        name={properties.name}
        id={properties.createdAt}
        createReview={props.createReview}
      />
    </Box>
  );
};

export default Reviews;
