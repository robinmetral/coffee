import React, { Component } from "react";
import { Form, TextInput, TextArea } from "grommet";
import RatingInput from "./RatingInput";

class UpdateReview extends Component {
  handleChange = e => {
    const { name, type, value } = e.target;
    // convert to number if necessary
    const val = type === "number" ? parseFloat(value) : value;
    // update review
    const review = { ...this.props.review, [name]: val, updatedAt: Date.now() };
    this.props.updateReview(this.props.id, review);
  };

  render() {
    const { rating, text } = this.props.review;
    return (
      <Form onSubmit={this.handleSubmit}>
        {/* TODO make a star rating input */}
        <RatingInput />
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
      </Form>
    );
  }
}

export default UpdateReview;
