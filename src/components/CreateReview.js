import React, { Component } from "react";
import { Form, RadioButtonGroup, TextArea, Button } from "grommet";

class CreateReview extends Component {
  render() {
    return (
      <Form>
        <RadioButtonGroup name="rating" options={[1, 2, 3, 4, 5]} />
        <TextArea value="Write a review" />
        <Button type="submit" primary label="Submit" />
      </Form>
    );
  }
}

export default CreateReview;
