import React, { Component } from "react";
import { Form, RangeInput, TextArea, Button } from "grommet";
import { Chat } from "grommet-icons";

class CreateReview extends Component {
  render() {
    return (
      <Form>
        <RangeInput name="rating" min={1} max={5} />
        <TextArea placeholder="Your review..." />
        <Button icon={<Chat />} type="submit" primary label="Submit" />
      </Form>
    );
  }
}

export default CreateReview;
