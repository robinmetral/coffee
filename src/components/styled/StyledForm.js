import styled from "styled-components"

const StyledForm = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-gap: 0.5rem;
  .comment, .osm, button {
    grid-column: 1/4;
  }
`

export default StyledForm
