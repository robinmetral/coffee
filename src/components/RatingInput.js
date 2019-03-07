import React, { Component } from "react";
import { Box } from "grommet";
import { Star } from "grommet-icons";

class RatingInput extends Component {
  state = {
    rating: this.props.rating
  };
  render() {
    const { rating, size } = this.props;
    return (
      <Box direction="row">
        {[...Array(5)].map((star, key) => {
          return (
            <Star
              size={size || "medium"}
              color={key < rating ? "plain" : "status-unknown"}
              key={key}
            />
          );
        })}
      </Box>
    );
  }
}

export default RatingInput;
