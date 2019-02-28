import React, { Component } from "react";
import { Form, FormField, TextInput } from "grommet";
import firebase from "firebase/app";
import "firebase/auth";

class Auth extends Component {
  emailRef = React.createRef();
  passwordRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const email = this.emailRef.current.value;
    const password = this.passwordRef.current.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        console.log(`Error ${error.code}: ${error.message}`);
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormField label="email">
          <TextInput type="email" ref={this.emailRef} />
        </FormField>
        <FormField label="password">
          <TextInput type="password" ref={this.passwordRef} />
        </FormField>
      </Form>
    );
  }
}

export default Auth;
