import React, { Component } from "react";
import { Form, TextInput, TextArea, Button } from "grommet";
import { Chat } from "grommet-icons";

class CreateReview extends Component {
  state = {
    rating: "",
    review: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    // prevent form from submitting
    e.preventDefault();
    // build review object
    const review = {};
    review.rating = parseFloat(this.ratingRef.current.value);
    review.text = this.textRef.current.value;
    // create unique id
    review.createdAt = Date.now();
    // send to App
    this.props.createReview(this.props.id, review);
    // reset form
    e.target.reset();
  };

  render() {
    const { rating, review } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <TextInput
          type="number"
          name="rating"
          value={rating}
          placeholder={`Rate ${this.props.name}`}
          onChange={this.handleChange}
        />
        <TextArea
          resize="vertical"
          name="review"
          value={review}
          placeholder={`Review ${this.props.name}...`}
          onChange={this.handleChange}
        />
        <Button icon={<Chat />} type="submit" primary label="Submit" />
      </Form>
    );
  }
}

export default CreateReview;
