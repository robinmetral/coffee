import styled from "styled-components";

const StyledForm = styled.fieldset`
  border: none;
  margin: 1rem;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-gap: 0.5rem;
  align-items: start;
  .comment,
  .osm,
  button {
    grid-column: 1/4;
  }
  .laptop,
  .rating {
    justify-items: center;
  }
  select {
    text-align: center;
  }
`;

export default StyledForm;
