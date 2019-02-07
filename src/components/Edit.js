import React from "react"
import PropTypes from "prop-types"
import { Formik, Form, Field, ErrorMessage } from "formik"

import FormValidation from "./FormValidation"

class Edit extends React.Component {

  static propTypes = {
    updateCafe: PropTypes.func,
    deleteCafe: PropTypes.func,
    index: PropTypes.string,
    cafe: PropTypes.shape({
      name: PropTypes.string,
      summary: PropTypes.string,
    })
  }

  handleChange = event => {
    const { name, value } = event.target
    const updatedCafe = {
      ...this.props.cafe,
      [name]: value
    }
    this.props.updateCafe(this.props.index, updatedCafe)
  }

  render() {
    return (
      <Formik
        initialValues={{
          name: this.props.cafe.name,
          summary: this.props.cafe.summary
        }}
        enableReinitialize={true}
        validate={FormValidation}
      >
        <Form>
          <Field type="text" name="name" onChange={this.handleChange} />
          <ErrorMessage name="name" component="div" />
          <Field type="textarea" name="summary" onChange={this.handleChange} />
          <ErrorMessage name="summary" component="div" />
          <button type="delete" onClick={() => this.props.deleteCafe(this.props.index)}>
            Delete
          </button>
        </Form>
      </Formik>
    )
  }
}

export default Edit
