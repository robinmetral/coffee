import React, { Component } from "react";
import { Box, Text, Button } from "grommet";
import { FormClose } from "grommet-icons";
import Reviews from "./Reviews"

class Cafe extends Component {
  render() {
    // is no cafe is passed, no cafe has been clicked
    if (!this.props.cafe) {
      return null;
    }

    const { name } = this.props.cafe.properties;
    return (
      <Box>
        <Box
          direction="row"
          align="center"
          as="header"
          elevation="small"
          justify="between"
        >
          <Text margin={{ left: "small" }}>{name}</Text>
          <Button icon={<FormClose />} onClick={this.props.togglePanel} />
        </Box>
        <Box flex overfow="auto" pad="xsmall">
          <Box>
            <Text>Cafe info</Text>
          </Box>
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
