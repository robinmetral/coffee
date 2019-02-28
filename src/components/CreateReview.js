import React, { Component } from "react";
import { Form, FormField, RadioButtonGroup, TextArea, Button } from "grommet";

class CreateReview extends Component {
  render() {
    return (
      <Form>
        <FormField label="Rating" required={true}>
          <RadioButtonGroup name="rating" options={[1, 2, 3, 4, 5]} />
        </FormField>
        <FormField label="Review">
          <TextArea value="Write a review" />
        </FormField>
        <Button type="submit" primary label="Submit" />
      </Form>
    );
  }
}

export default CreateReview;
