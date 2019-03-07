import React, { Component } from "react";
import { Form, TextArea, Box, Button } from "grommet";
import { Send, Close } from "grommet-icons";
import RatingInput from "./RatingInput";

class UpdateReview extends Component {
  state = {
    rating: this.props.review.rating,
    text: this.props.review.text
  };

  handleChange = (name, value) => {
    // update state
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    // update review
    const review = {
      ...this.props.review,
      rating: this.state.rating,
      text: this.state.text,
      updatedAt: Date.now()
    };
    this.props.updateReview(this.props.id, review);
    this.props.toggleEdit();
  };

  render() {
    const { rating, text } = this.state;
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
          <Button type="submit" icon={<Send />} label="Submit" />
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
