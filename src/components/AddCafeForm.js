import React, { Component } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

import FormSchema from "./FormSchema"
import StyledForm from "./styled/StyledForm"
import StyledInput from "./styled/StyledInput"
import StyledButton from "./styled/StyledButton"
import Heading from "./styled/Heading.js"

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
            <legend><Heading>Ajouter un café</Heading></legend>

            <StyledInput className="name">
              Nom
              <Field
                type="text"
                name="name"
                placeholder="Nom"
              />
              <ErrorMessage name="name" component="div" />
            </StyledInput>

            <StyledInput className="laptop">
              <span role="img" aria-label="laptop emoji">&#x1f4bb;</span>
              <Field
                type="checkbox"
                name="laptop"
                value="true"
              />
              <span></span>
              <ErrorMessage name="laptop" component="div" />
            </StyledInput>

            <StyledInput className="rating">
              <span role="img" aria-label="star emoji">&#x2b50;</span>
              <Field component="select" name="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Field>
              <ErrorMessage name="rating" component="div" />
            </StyledInput>

            <StyledInput className="comment">
              Commentaire
              <Field
                component="textarea"
                name="comment"
                placeholder="Commentaire"
              />
              <ErrorMessage name="comment" component="div" />
            </StyledInput>

            <StyledInput className="osm">
              ID OpenStreetMap
              <Field
                type="number"
                name="osm"
                placeholder="ID OpenStreetMap"
              />
              <ErrorMessage name="osm" component="div" />
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
