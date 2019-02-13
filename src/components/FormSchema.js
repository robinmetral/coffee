/* eslint-disable */

import * as Yup from "yup"

Yup.setLocale({
  mixed: {
    default: "Erreur de validation",
    required: "Ce champ est obligatoire",
  },
  string: {
    min: "Trop court (minimum ${min} caractères)",
    max: "Trop long (maximum ${max} caractères)",
  },
  number: {
    min: "Trop petit (minimum ${min})",
    max: "Trop grand (maximum ${max})",
  },
})

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .max(25)
    .required(),
  osm: Yup.number()
    .moreThan(1)
    .required(),
  rating: Yup.number()
    .min(1)
    .max(5)
    .required(),
  comment: Yup.string()
    .min(25)
    .max(500)
    .required(),
})

export default FormSchema
