import styled from "styled-components"

const StyledInput = styled.label`
  display: grid;
  input, textarea, select {
    display: block; // teaxtarea is inline-block by default
    font-family: inherit; // not inherited by default
    font-size: 100%; // not inherited by default
    box-sizing: border-box; // harmonize box sizing
    width: 100%;
    padding: 4px;
    border: 2px solid darkgray;
    border-radius: 4px;
  }
`

export default StyledInput
