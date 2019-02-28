import React, { Component } from "react";
import { Form, TextInput, Button } from "grommet";
import firebase from "firebase/app";
import "firebase/auth";

class SignUp extends Component {
  emailRef = React.createRef();
  passwordRef = React.createRef();

  handleSubmit = e => {
    // prevent form from submitting
    e.preventDefault();
    // get typed values
    const email = this.emailRef.current.value;
    const password = this.passwordRef.current.value;
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
    return (
      <Form onSubmit={this.handleSubmit}>
        <TextInput type="email" placeholder="email" ref={this.emailRef} />
        <TextInput
          type="password"
          placeholder="password"
          ref={this.passwordRef}
        />
        <Button type="submit" primary label="Sign up" />
      </Form>
    );
  }
}

export default SignUp;
