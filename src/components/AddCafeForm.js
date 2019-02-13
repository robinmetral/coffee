import React, { Component } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

import FormSchema from "./FormSchema"
import StyledForm from "./styled/StyledForm"

class AddCafeForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
        name: "",
        osm: "",
        laptop: "",
        rating: "1",
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
          <StyledForm>
            <legend>Ajouter un café</legend>

            <label>
              <div>Nom</div>
              <ErrorMessage name="name" component="div" />
              <Field
                type="text"
                name="name"
                placeholder="Nom"
              />
            </label>

            <label>
              <div>ID OpenStreetMap</div>
              <ErrorMessage name="osm" component="div" />
              <Field
                type="number"
                name="osm"
                placeholder="ID OSM"
              />
            </label>

            <label>
              <div><span role="img" aria-label="laptop emoji">💻</span></div>
              <ErrorMessage name="laptop" component="div" />
              <Field
                type="checkbox"
                name="laptop"
                value="true"
              />
            </label>

            <label>
              <div><span role="img" aria-label="star emoji">⭐</span></div>
              <ErrorMessage name="rating" component="div" />
              <Field component="select" name="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Field>
            </label>

            <label>
              <div>Commentaire</div>
              <ErrorMessage name="comment" component="div" />
              <Field
                component="textarea"
                name="comment"
                placeholder="Commentaire"
              />
            </label>

            <button type="submit" disabled={isSubmitting}>
              Ajouter
            </button>
          </StyledForm>
        </Form>
        )}
      </Formik>
      )
  }
}

export default AddCafeForm
