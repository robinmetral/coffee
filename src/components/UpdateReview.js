import React, { Component } from "react";
import { Form, TextInput, TextArea, Button } from "grommet";
import { Chat } from "grommet-icons";

class UpdateReview extends Component {
  state = {
    rating: this.props.review.rating,
    text: this.props.review.text
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    // prevent form from submitting
    e.preventDefault();
    // take a copy of current review
    const review = { ...this.props.review };
    // update review
    const { rating, text } = this.state;
    review.rating = parseFloat(rating);
    review.text = text;
    // add updated data
    review.updatedAt = Date.now();
    // send to App
    this.props.updateReview(this.props.id, review);
  };

  render() {
    const { rating, text } = this.state;
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
          name="text"
          value={text}
          placeholder={`Review ${this.props.name}...`}
          onChange={this.handleChange}
        />
        <Button icon={<Chat />} type="submit" primary label="Submit" />
      </Form>
    );
  }
}

export default UpdateReview;
