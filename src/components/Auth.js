import React, { Component } from "react";
import { Form, FormField, TextInput } from "grommet";

class Auth extends Component {
  render() {
    return (
      <Form>
        <FormField label="email">
          <TextInput />
        </FormField>
        <FormField label="password">
          <TextInput />
        </FormField>
      </Form>
    );
  }
}

export default Auth;
