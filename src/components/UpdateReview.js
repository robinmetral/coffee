import React, { Component } from "react";
import { Form, TextArea } from "grommet";
import RatingInput from "./RatingInput";

class UpdateReview extends Component {
  handleChange = target => {
    const { name, type, value } = target;
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
        <RatingInput rating={rating} handleChange={this.handleChange} />
        <TextArea
          resize="vertical"
          name="text"
          value={text}
          placeholder={`Review ${this.props.name}...`}
          onChange={e => this.handleChange(e.target)}
        />
      </Form>
    );
  }
}

export default UpdateReview;
