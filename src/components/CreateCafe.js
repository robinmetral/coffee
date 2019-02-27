import React, { Component } from "react";
import { Form, FormField, TextInput, Button } from "grommet";

class CreateCafe extends Component {
  render() {
    return (
      <Form onSubmit={this.props.createCafe}>
        <FormField label="OpenStreetMap ID">
          <TextInput value="number" />
        </FormField>
        <Button type="submit" primary label="Submit" />
      </Form>
    );
  }
}

export default CreateCafe;
