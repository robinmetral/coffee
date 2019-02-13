import React, { Component } from "react"
import { Formik, Field, ErrorMessage } from "formik"

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
        <StyledForm>
          <h2>Ajouter un café</h2>

          <div className="form-line">
            <label>
              <div>Nom</div>
              <Field
                type="text"
                name="name"
                placeholder="Nom"
              />
              <ErrorMessage name="name" component="div" />
            </label>

            <label>
              <div>ID OpenStreetMap</div>
              <Field
                type="number"
                name="osm"
                placeholder="ID OSM"
              />
              <ErrorMessage name="osm" component="div" />
            </label>

            <label>
              <div><span role="img" aria-label="laptop emoji">💻</span></div>
              <Field
                type="checkbox"
                name="laptop"
                value="true"
              />
            </label>

            <label>
              <div><span role="img" aria-label="star emoji">⭐</span></div>
              <Field component="select" name="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Field>
            </label>
          </div>

          <label>
            <div>Commentaire</div>
            <Field
              component="textarea"
              name="comment"
              placeholder="Commentaire"
            />
            <ErrorMessage name="comment" component="div" />
          </label>

          <button type="submit" disabled={isSubmitting}>
            Ajouter
          </button>
        </StyledForm>
        )}
      </Formik>
      )
  }
}

export default AddCafeForm
