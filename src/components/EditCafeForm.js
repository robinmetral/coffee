import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

import FormSchema from "./FormSchema"
import StyledForm from "./styled/StyledForm"
import StyledInput from "./styled/StyledInput"
import StyledButton from "./styled/StyledButton"

class EditCafeForm extends React.Component {

  handleChange = event => {
    const { target } = event
    const value = target.type === "checkbox" ? target.checked : target.value
    const { name } = target
    const updatedCafe = {
      ...this.props.cafe,
      [name]: value
    }
    this.props.updateCafe(updatedCafe)
  }

  render() {
    const cafe = this.props.cafe

    // return empty fragment if there is no cafe
    if(!cafe) {
      return (<></>)
    }

    return (
      <Formik
        initialValues={{
        name: cafe.name,
        laptop: cafe.laptop,
        rating: cafe.rating,
        comment: cafe.comment
        }}
        enableReinitialize={true}
        validate={FormSchema}
      >
        <Form>
          <StyledForm>
            <legend>Modifier {cafe.name}</legend>

            <StyledInput className="name">
              Nom
              <ErrorMessage name="name" component="div" />
              <Field
                type="text"
                name="name"
                onChange={this.handleChange}
              />
            </StyledInput>

            <StyledInput className="laptop">
              <span role="img" aria-label="laptop emoji">💻</span>
              <ErrorMessage name="laptop" component="div" />
              <Field
                type="checkbox"
                name="laptop"
                checked={cafe.laptop ? "checked" : ""}
                onChange={this.handleChange}
              />
            </StyledInput>

            <StyledInput className="rating">
              <span role="img" aria-label="star emoji">⭐</span>
              <ErrorMessage name="rating" component="div" />
              <Field
                component="select"
                name="rating"
                onChange={this.handleChange}
              >
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
                onChange={this.handleChange}
              />
            </StyledInput>

            <StyledButton type="delete" onClick={() => this.props.deleteCafe(cafe.osm)}>
              Supprimer
            </StyledButton>
          </StyledForm>
        </Form>
      </Formik>
      )
}
}

export default EditCafeForm
