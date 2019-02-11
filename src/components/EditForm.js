import React from "react"
import PropTypes from "prop-types"
import { Formik, Form, Field, ErrorMessage } from "formik"

import FormValidation from "./FormValidation"

class EditForm extends React.Component {

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
          clara: this.props.cafe.clara,
          robin: this.props.cafe.robin,
          laptop: this.props.cafe.laptop,
          rating: this.props.cafe.rating,
          comment: this.props.cafe.comment
        }}
        enableReinitialize={true}
        validate={FormValidation}
      >
        <Form>
          <Field
            type="text"
            name="name"
            onChange={this.handleChange}
          />
          <ErrorMessage name="name" component="div" />

          <Field
            type="text"
            name="clara"
            onChange={this.handleChange}
          />
          <ErrorMessage name="clara" component="div" />

          <Field
            type="text"
            name="robin"
            onChange={this.handleChange}
          />
          <ErrorMessage name="robin" component="div" />

          <Field
            component="select"
            name="laptop"
            onChange={this.handleChange}
          >
            <option value="" disabled>Laptop</option>
            <option value="true">Oui</option>
            <option value="false">Non</option>
          </Field>
          <ErrorMessage name="laptop" component="div" />

          <Field
            component="select"
            name="rating"
            onChange={this.handleChange}
          >
            <option value="" disabled>Note</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Field>
          <ErrorMessage name="rating" component="div" />

          <Field
            component="textarea"
            name="comment"
            onChange={this.handleChange}
          />
          <ErrorMessage name="comment" component="div" />

          <button type="delete" onClick={() => this.props.deleteCafe(this.props.index)}>
            Supprimer
          </button>
        </Form>
      </Formik>
    )
  }
}

export default EditForm
