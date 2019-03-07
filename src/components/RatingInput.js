import React, { Component } from "react";
import { Box } from "grommet";
import { Star } from "grommet-icons";

class RatingInput extends Component {
  state = {
    rating: this.props.rating
  };
  render() {
    return (
      <Box direction="row">
        <Star />
      </Box>
    );
  }
}

export default RatingInput;
