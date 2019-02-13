import React from "react"
import { Formik, Field, ErrorMessage } from "formik"

import FormSchema from "./FormSchema"
import StyledForm from "./styled/StyledForm"

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

          <div className="form-line">
            <label>
              <div>Nom</div>
              <Field
                type="text"
                name="name"
                onChange={this.handleChange}
              />
              <ErrorMessage name="name" component="div" />
            </label>

            <label>
              <div>Laptop</div>
              <Field
                type="checkbox"
                name="laptop"
                checked={cafe.laptop ? "checked" : ""}
                onChange={this.handleChange}
              />
              <ErrorMessage name="laptop" component="div" />
            </label>

            <label>
              <div>Note</div>
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
              <ErrorMessage name="rating" component="div" />
            </label>
          </div>

          <label>
            <div>Commentaire</div>
            <Field
              component="textarea"
              name="comment"
              onChange={this.handleChange}
            />
            <ErrorMessage name="comment" component="div" />
          </label>

          <button type="delete" onClick={() => this.props.deleteCafe(cafe.osm)}>
            Supprimer
          </button>
        </StyledForm>
      </Formik>
      )
}
}

export default EditCafeForm
