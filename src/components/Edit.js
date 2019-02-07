import React from "react"
import PropTypes from "prop-types"
import { Formik, Form, Field, ErrorMessage } from "formik"

class Edit extends React.Component {

  static propTypes = {
    updateResume: PropTypes.func,
    deleteResume: PropTypes.func,
    index: PropTypes.string,
    resume: PropTypes.shape({
      name: PropTypes.string,
      summary: PropTypes.string,
    })
  }

  /*
  handleChange = (event) => {
    // take a copy of current resume
    const updatedResume = {
      ...this.props.resume,
      [event.currentTarget.name]: event.currentTarget.value
    }
    this.props.updateResume(this.props.index, updatedResume)
  }
  */

  handleChange = event => {
    const { name, value } = event.target
    const updatedResume = {
      ...this.props.resume,
      [name]: value
    }
    this.props.updateResume(this.props.index, updatedResume)
  }

  render() {
    /*
    const { resume } = this.props
    return (
      <div className="resume-edit">
        <input name="name" onChange={this.handleChange} value={resume.name} type="text" />
        <textarea name="summary" onChange={this.handleChange} value={resume.summary} />
        <button onClick={() => this.props.deleteResume(this.props.index)}>Remove Resume</button>
      </div>
    )
    */
    return (
      <Formik
        initialValues={{
          name: this.props.resume.name,
          summary: this.props.resume.summary
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
          <button type="delete" onClick={() => this.props.deleteResume(this.props.index)}>
            Delete
          </button>
        </Form>
      </Formik>
    )
  }
}

export default Edit
