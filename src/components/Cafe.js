import React, { Component } from "react";
import { Box, Heading } from "grommet";
import CreateReview from "./CreateReview";

class Cafe extends Component {
  render() {
    // is no cafe is passed, no cafe has been clicked
    if (!this.props.cafe) {
      return null;
    }

    const { name } = this.props.cafe.properties;
    return (
      <Box pad="small">
        <Heading>{name}</Heading>
        <CreateReview id={this.props.clicked} />
      </Box>
    );
  }
}

export default Cafe;
