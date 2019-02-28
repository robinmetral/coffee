import React, { Component } from "react";
import { Box, Form, TextInput, Button } from "grommet";
import { UserAdd } from "grommet-icons";
import firebase from "firebase/app";
import "firebase/auth";

class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    // prevent form from submitting
    e.preventDefault();
    // get typed values
    const { email, password } = this.state;
    // create user on Firebase
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        console.log(`Error ${error.code}: ${error.message}`);
      });
    // reset form
    e.target.reset();
  };

  render() {
    const { email, password } = this.state;
    return (
      <Box pad="small">
        <Form onSubmit={this.handleSubmit}>
          <TextInput
            type="email"
            name="email"
            value={email}
            placeholder="email"
          />
          <TextInput
            type="password"
            name="password"
            value={password}
            placeholder="password"
          />
          <Button icon={<UserAdd />} type="submit" primary label="Sign up" />
        </Form>
      </Box>
    );
  }
}

export default SignUp;
