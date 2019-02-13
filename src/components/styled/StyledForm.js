import styled from "styled-components"
import { Form } from "formik"

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  .form-line {
    display: flex;
    justify-content: space-between;
  }
  label {
    display: flex;
    flex-direction: column;
  }
`

export default StyledForm
