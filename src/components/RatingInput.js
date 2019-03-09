import React, { Component } from "react";
import { Box, Button } from "grommet";
import { Star } from "grommet-icons";

class RatingInput extends Component {
  handleClick = key => {
    // increment to have the right rating
    key++;
    // pass input name and value to handleChange
    this.props.handleChange("rating", key);
  };

  render() {
    const { rating } = this.props;
    return (
      <Box direction="row">
        {[...Array(5)].map((star, key) => {
          return (
            <Button plain onClick={() => this.handleClick(key)} key={key}>
              <Star color={key < rating ? "plain" : "status-unknown"} />
            </Button>
          );
        })}
      </Box>
    );
  }
}

export default RatingInput;
