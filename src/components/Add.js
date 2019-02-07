import React, { Component } from "react"
import PropTypes from "prop-types"
import { Formik, Form, Field, ErrorMessage } from "formik"

import FormValidation from "./FormValidation"

class Add extends Component {

  static propTypes = {
    addCafe: PropTypes.func
  }

  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          summary: "",
        }}
        validate={FormValidation}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            this.props.addCafe(values)
            setSubmitting(false);
            resetForm()
            }, 400)
        }}
      >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          <Field type="textarea" name="summary" />
          <ErrorMessage name="summary" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
      </Formik>
    )
  }
}

export default Add
