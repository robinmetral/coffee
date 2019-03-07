import React, { Component } from "react";
import { Form, TextArea } from "grommet";
import RatingInput from "./RatingInput";

class UpdateReview extends Component {
  handleChange = (name, value) => {
    // update review
    const review = { ...this.props.review, [name]: value, updatedAt: Date.now() };
    this.props.updateReview(this.props.id, review);
  };

  render() {
    const { rating, text } = this.props.review;
    return (
      <Form onSubmit={this.handleSubmit}>
        <RatingInput rating={rating} handleChange={this.handleChange} />
        <TextArea
          resize="vertical"
          name="text"
          value={text}
          placeholder={`Review ${this.props.name}...`}
          onChange={e => this.handleChange(e.target.name, e.target.value)}
        />
      </Form>
    );
  }
}

export default UpdateReview;
