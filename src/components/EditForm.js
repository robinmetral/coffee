import React from "react"
import { Formik, Field, ErrorMessage } from "formik"

import FormSchema from "./FormSchema"
import StyledForm from "./styled/StyledForm"

class EditForm extends React.Component {

  handleChange = event => {
    const { name, value } = event.target
    const updatedCafe = {
      ...this.props.cafe,
      [name]: value
    }
    this.props.updateCafe(updatedCafe)
  }

  render() {
    const cafe = this.props.cafe
    if(!cafe) {
      return (
        <h2>Cliquer un café pour le modifier</h2>
      )
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
        <StyledForm>
          <h2>Modifier {cafe.name}</h2>
          <Field
            type="text"
            name="name"
            onChange={this.handleChange}
          />
          <ErrorMessage name="name" component="div" />

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

          <button type="delete" onClick={() => this.props.deleteCafe(cafe.osm)}>
            Supprimer
          </button>
        </StyledForm>
      </Formik>
    )
  }
}

export default EditForm
