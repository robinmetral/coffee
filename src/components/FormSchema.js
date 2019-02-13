const FormValidation = values => {
  let errors = {}
  // name
  if (!values.name) {
    errors.name = "Enter the cafe's name"
  }
  // osm id
  if (!values.osm) {
    errors.osm = "Enter the cafe's OpenStreetMap ID"
  }
  // rating
  if (!values.rating) {
    errors.rating = "Rate the cafe"
  }
  // validate that this is a number
  // comment
  if (!values.comment) {
    errors.comment = "Enter a comment"
  }
  else if (values.comment.length < 10) {
    errors.comment = "This comment is very short, write a bit more!"
  }
  return errors
}

export default FormValidation
