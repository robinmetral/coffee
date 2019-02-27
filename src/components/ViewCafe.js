import React, { Component } from "react";
import { Heading } from "grommet";
import CreateReview from "./CreateReview";

class ViewCafe extends Component {
  render() {
    // is no cafe is passed, no cafe has been clicked
    if (!this.props.cafe) {
      return null;
    }

    const { name } = this.props.cafe.properties;
    return (
      <div>
        <Heading>{name}</Heading>
        {this.props.isLoggedIn && <CreateReview />}
      </div>
    );
  }
}

export default ViewCafe;
