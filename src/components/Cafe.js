import React, { Component } from "react";
import { Box, Heading, Button } from "grommet";
import { FormClose } from "grommet-icons";
import Info from "./Info";
import Reviews from "./Reviews";

class Cafe extends Component {
  render() {
    // is no cafe is passed, no cafe has been clicked
    if (!this.props.cafe) {
      return null;
    }
    return (
      <Box width="medium" elevation="large" fill="vertical" overflow="auto">
        <Box direction="row" align="center" justify="between">
          <Heading size="small" margin={{ left: "small" }}>
            {this.props.cafe.properties.name}
          </Heading>
          <Button icon={<FormClose />} onClick={this.props.togglePanel} />
        </Box>
        <Box pad="small">
          <Info cafe={this.props.cafe} />
        </Box>
        <Box pad="small">
          <Reviews
            cafe={this.props.cafe}
            createReview={this.props.createReview}
          />
        </Box>
      </Box>
    );
  }
}

export default Cafe;
