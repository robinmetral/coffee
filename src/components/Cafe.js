import React, { Component } from "react";
import { Box, Text, Heading, Button } from "grommet";
import { FormClose } from "grommet-icons";
import { formatAddress } from "../helpers"
import Reviews from "./Reviews";

class Cafe extends Component {
  render() {
    // is no cafe is passed, no cafe has been clicked
    if (!this.props.cafe) {
      return null;
    }

    const { cafe } = this.props
    const { name } = cafe.properties;
    const address = formatAddress(cafe)
    return (
      <Box width="medium" elevation="large" fill="vertical" overflow="auto">
        <Box direction="row" align="center" justify="between">
          <Heading size="small" margin={{ left: "small" }}>
            {name}
          </Heading>
          <Button icon={<FormClose />} onClick={this.props.togglePanel} />
        </Box>
        <Box pad="small">
          <Text>{address}</Text>
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
