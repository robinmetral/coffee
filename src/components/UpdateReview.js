import React, { Component } from "react";
import { Form, TextInput, TextArea, Button, Box } from "grommet";
import { Edit, Trash } from "grommet-icons";

// TODO state doesn't reload when moving from one café to another

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
    // close form
    this.props.toggleForm();
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
        <Box direction="row">
          <Button icon={<Edit />} type="submit" primary label="Update" />
          {/* TODO deleteReview breaks averageRating */}
          <Button
            icon={<Trash />}
            label="Delete"
            color="status-critical"
            onClick={() =>
              this.props.deleteReview(
                this.props.id,
                this.props.review.createdAt
              )
            }
          />
        </Box>
      </Form>
    );
  }
}

export default UpdateReview;
