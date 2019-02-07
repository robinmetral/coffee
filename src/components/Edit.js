import React from "react"
import PropTypes from "prop-types"
import { Formik, Form, Field, ErrorMessage } from "formik"

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

  /*
  handleChange = (event) => {
    // take a copy of current cafe
    const updatedCafe = {
      ...this.props.cafe,
      [event.currentTarget.name]: event.currentTarget.value
    }
    this.props.updateCafe(this.props.index, updatedCafe)
  }
  */

  handleChange = event => {
    const { name, value } = event.target
    const updatedCafe = {
      ...this.props.cafe,
      [name]: value
    }
    this.props.updateCafe(this.props.index, updatedCafe)
  }

  render() {
    /*
    const { cafe } = this.props
    return (
      <div className="cafe-edit">
        <input name="name" onChange={this.handleChange} value={cafe.name} type="text" />
        <textarea name="summary" onChange={this.handleChange} value={cafe.summary} />
        <button onClick={() => this.props.deleteCafe(this.props.index)}>Remove Cafe</button>
      </div>
    )
    */
    return (
      <Formik
        initialValues={{
          name: this.props.cafe.name,
          summary: this.props.cafe.summary
        }}
        enableReinitialize={true}
        validate={values => {
          let errors = {}
          if (!values.name) {
            errors.name = "The name is required."
          }
          if (values.summary.length < 10) {
            errors.summary = "The summary is too short."
          }
          return errors
        }}
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
