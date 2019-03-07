import React, { Component } from "react";
import { Form, TextArea, Box, Button } from "grommet";
import { Send, Close } from "grommet-icons";
import RatingInput from "./RatingInput";

class UpdateReview extends Component {
  handleChange = (name, value) => {
    // update review
    const review = {
      ...this.props.review,
      [name]: value,
      updatedAt: Date.now()
    };
    this.props.updateReview(this.props.id, review);
  };

  handleSubmit = () => {};

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
        <Box direction="row">
          <Button icon={<Send />} label="Submit" onSubmit={this.handleSubmit} />
          <Button
            icon={<Close />}
            label="Cancel"
            onClick={this.props.toggleEdit}
          />
        </Box>
      </Form>
    );
  }
}

export default UpdateReview;
