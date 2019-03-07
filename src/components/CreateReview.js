import React, { Component } from "react";
import { Form, TextArea, Button } from "grommet";
import { Chat } from "grommet-icons";
import RatingInput from "./RatingInput";

class CreateReview extends Component {
  state = {
    rating: 0,
    text: ""
  };

  handleChange = (name, value) => {
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
    // close form
    this.props.closeForm();
  };

  render() {
    const { rating, text } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        {/* TODO check that cafe has been rated (is more than 0) */}
        <RatingInput rating={rating} handleChange={this.handleChange} />
        <TextArea
          resize="vertical"
          name="text"
          value={text}
          placeholder={`Review ${this.props.name}...`}
          onChange={e => this.handleChange(e.target.name, e.target.value)}
        />
        <Button icon={<Chat />} type="submit" primary label="Submit" />
      </Form>
    );
  }
}

export default CreateReview;
