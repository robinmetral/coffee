import React, { Component } from "react";
import { Form, RangeInput, TextArea, Button } from "grommet";
import { Chat } from "grommet-icons";

class CreateReview extends Component {
  ratingRef = React.createRef();
  textRef = React.createRef();

  handleSubmit = e => {
    // prevent form from submitting
    e.preventDefault();
    // build review object
    const review = {};
    review.rating = this.ratingRef.current.value;
    review.text = this.textRef.current.value;
    // create unique id
    review.createdAt = Date.now();
    console.log(review);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <RangeInput name="rating" min={1} max={5} ref={this.ratingRef} />
        <TextArea placeholder="Your review..." ref={this.textRef} />
        <Button icon={<Chat />} type="submit" primary label="Submit" />
      </Form>
    );
  }
}

export default CreateReview;
