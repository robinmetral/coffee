import styled from "styled-components"

const StyledInput = styled.label`
  display: grid;
  input, textarea, select {
    font-family: inherit; // not inherited by default
    font-size: 100%; // not inherited by default
    box-sizing: border-box; // harmonize box sizing
    background-color: white; // harmonize background color
    width: 100%;
    padding: 4px;
    border: 2px solid darkgray;
    border-radius: 4px;
    &:focus {
      border-color: gray;
    }
  }
  textarea {
    display: block; // teaxtarea is inline-block by default
    resize: vertical; // resize only vertically
  }
  select {
    appearance: none; // hide arrow
  }
  input[type=number] {
    appearance: textfield; // hide arrows
  }
`

export default StyledInput
