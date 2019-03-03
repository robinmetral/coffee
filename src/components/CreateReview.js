import React, { Component } from "react";
import { Form, TextInput, TextArea, Button } from "grommet";
import { Chat } from "grommet-icons";

class CreateReview extends Component {
  state = {
    rating: "",
    text: ""
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
    const { rating, text } = this.state;
    review.rating = parseFloat(rating);
    review.text = text;
    // create unique id
    review.createdAt = Date.now();
    // add user data to review
    review.user = this.props.user;
    // send to App
    this.props.createReview(this.props.id, review);
    // reset form state
    this.setState({
      rating: "",
      text: ""
    });
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

export default CreateReview;
