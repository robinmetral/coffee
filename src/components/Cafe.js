import React, { Component } from "react";
import { Box, Text, Button } from "grommet";
import CreateReview from "./CreateReview";
import { FormClose } from "grommet-icons";

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
          <Text>Map over reviews...</Text>
          <CreateReview
            name={name}
            createReview={this.props.createReview}
            id={this.props.clicked}
          />
        </Box>
      </Box>
    );
  }
}

export default Cafe;
