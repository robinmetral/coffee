import React, { Component } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

import FormSchema from "./FormSchema"
import StyledForm from "./styled/StyledForm"
import StyledInput from "./styled/StyledInput"
import StyledInputLaptop from "./styled/StyledInputLaptop"
import StyledButton from "./styled/StyledButton"

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

            <StyledInput className="name">
              Nom
              <ErrorMessage name="name" component="div" />
              <Field
                type="text"
                name="name"
                placeholder="Nom"
              />
            </StyledInput>

            <StyledInputLaptop className="laptop">
              <span role="img" aria-label="laptop emoji">💻</span>
              <ErrorMessage name="laptop" component="div" />
              <Field
                type="checkbox"
                name="laptop"
                value="true"
              />
            </StyledInputLaptop>

            <StyledInput className="rating">
              <span role="img" aria-label="star emoji">⭐</span>
              <ErrorMessage name="rating" component="div" />
              <Field component="select" name="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Field>
            </StyledInput>

            <StyledInput className="comment">
              Commentaire
              <ErrorMessage name="comment" component="div" />
              <Field
                component="textarea"
                name="comment"
                placeholder="Commentaire"
              />
            </StyledInput>

            <StyledInput className="osm">
              ID OpenStreetMap
              <ErrorMessage name="osm" component="div" />
              <Field
                type="number"
                name="osm"
                placeholder="ID OSM"
              />
            </StyledInput>

            <StyledButton type="submit" disabled={isSubmitting}>
              Ajouter
            </StyledButton>
          </StyledForm>
        </Form>
        )}
      </Formik>
      )
  }
}

export default AddCafeForm
