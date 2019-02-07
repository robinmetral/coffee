import React, { Component } from "react"
import PropTypes from "prop-types"
import { Formik, Form, Field, ErrorMessage } from "formik"

class Add extends Component {

  static propTypes = {
    addResume: PropTypes.func
  }

  /*
  nameRef = React.createRef()
  summaryRef = React.createRef()

  createResume = event => {
    // prevent form from submitting
    event.preventDefault()
    // pull values from form into object
    const resume = {
      name: this.nameRef.current.value,
      summary: this.summaryRef.current.value,
    }
    // call addResume function
    this.props.addResume(resume)
    // reset form
    event.currentTarget.reset()
  }
  */

  render() {
    /*
    return (
      <form onSubmit={this.createResume} >
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <textarea name="summary" ref={this.summaryRef} placeholder="Summary" />
        <button type="submit">Add Resume</button>
      </form>
    )
    */
    return (
      <Formik
        initialValues={{
          name: "",
          summary: "",
        }}
        validate={values => {
          let errors = {}
          if (!values.name) {
            errors.name = "The name is required."
          }
          if (values.summary.length < 100) {
            errors.summary = "The summary is too short."
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            this.props.addResume(values)
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
