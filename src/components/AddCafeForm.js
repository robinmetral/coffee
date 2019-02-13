import React, { Component } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

import FormSchema from "./FormSchema"
import StyledForm from "./styled/StyledForm"
import StyledInputName from "./styled/StyledInputName"
import StyledInputOsm from "./styled/StyledInputOsm"
import StyledInputLaptop from "./styled/StyledInputLaptop"
import StyledInputRating from "./styled/StyledInputRating"
import StyledInputComment from "./styled/StyledInputComment"
import StyledFormButton from "./styled/StyledFormButton"

class AddCafeForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
        name: "",
        laptop: "",
        rating: "1",
        comment: "",
        osm: "",
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

            <StyledInputName>
              Nom
              <ErrorMessage name="name" component="div" />
              <Field
                type="text"
                name="name"
                placeholder="Nom"
              />
            </StyledInputName>

            <StyledInputLaptop>
              <span role="img" aria-label="laptop emoji">💻</span>
              <ErrorMessage name="laptop" component="div" />
              <Field
                type="checkbox"
                name="laptop"
                value="true"
              />
            </StyledInputLaptop>

            <StyledInputRating>
              <span role="img" aria-label="star emoji">⭐</span>
              <ErrorMessage name="rating" component="div" />
              <Field component="select" name="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Field>
            </StyledInputRating>

            <StyledInputComment>
              Commentaire
              <ErrorMessage name="comment" component="div" />
              <Field
                component="textarea"
                name="comment"
                placeholder="Commentaire"
              />
            </StyledInputComment>

            <StyledInputOsm>
              ID OpenStreetMap
              <ErrorMessage name="osm" component="div" />
              <Field
                type="number"
                name="osm"
                placeholder="ID OSM"
              />
            </StyledInputOsm>

            <StyledFormButton type="submit" disabled={isSubmitting}>
              Ajouter
            </StyledFormButton>
          </StyledForm>
        </Form>
        )}
      </Formik>
      )
  }
}

export default AddCafeForm
