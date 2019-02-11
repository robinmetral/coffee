import React, { Component } from "react"
import PropTypes from "prop-types"
import { Formik, Form, Field, ErrorMessage } from "formik"

import FormValidation from "./FormValidation"

class AddForm extends Component {

  static propTypes = {
    addCafe: PropTypes.func
  }

  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          osm: "",
          clara: "",
          robin: "",
          laptop: "",
          rating: "",
          comment: "",
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
          <Field
            type="text"
            name="name"
            placeholder="Nom"
          />
          <ErrorMessage name="name" component="div" />

          <Field
            type="number"
            name="osm"
            placeholder="ID OSM"
          />
          <ErrorMessage name="osm" component="div" />

          <Field
            type="text"
            name="clara"
            placeholder="Café de Clara"
          />
          <ErrorMessage name="clara" component="div" />

          <Field
            type="text"
            name="robin"
            placeholder="Café de Robin"
          />
          <ErrorMessage name="robin" component="div" />

          <Field component="select" name="laptop">
            <option value="" selected disabled>Laptop</option>
            <option value="true">Oui</option>
            <option value="false">Non</option>
          </Field>
          <ErrorMessage name="laptop" component="div" />

          <Field component="select" name="rating">
            <option value="" selected disabled>Note</option>
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
            placeholder="Commentaire"
          />
          <ErrorMessage name="comment" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Ajouter
          </button>
        </Form>
      )}
      </Formik>
    )
  }
}

export default AddForm
