import React, { Component } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

import FormSchema from "./FormSchema"

class AddForm extends Component {

  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          osm: "",
          laptop: "",
          rating: "",
          comment: "",
        }}
        validationSchema={FormSchema}
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
          <h2>Ajouter un café</h2>
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

          <Field component="select" name="laptop">
            <option value="" disabled>Laptop</option>
            <option value="true">Oui</option>
            <option value="false">Non</option>
          </Field>
          <ErrorMessage name="laptop" component="div" />

          <Field component="select" name="rating">
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
