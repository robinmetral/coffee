import React, { Component } from "react";
import { Box } from "grommet";
import Info from "./Info";
import Reviews from "./Reviews";

class Cafe extends Component {
  render() {
    return (
      <Box flex={false}>
        <Box>
          <Info cafe={this.props.cafe} />
        </Box>
        <Box>
          <Reviews
            cafe={this.props.cafe}
            reviews={this.props.reviews}
            user={this.props.user}
            createReview={this.props.createReview}
            updateReview={this.props.updateReview}
            deleteReview={this.props.deleteReview}
          />
        </Box>
      </Box>
    );
  }
}

export default Cafe;
