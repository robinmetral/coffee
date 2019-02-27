import styled from "styled-components";

const StyledInput = styled.label`
  display: grid;
  input,
  textarea,
  select,
  input[type="checkbox"] + span {
    display: block; // teaxtarea is inline-block by default
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
    resize: vertical; // resize only vertically
  }
  select {
    width: 31px;
    height: 31px;
    appearance: none; // hide arrow
  }
  input[type="number"] {
    appearance: textfield; // hide arrows
  }
  input[type="checkbox"] {
    display: none;
    & + span {
      width: 31px;
      text-align: center;
      &::before {
        content: "\00a0";
      }
    }
    &:checked + span::before {
      content: "✓";
    }
  }
`;

export default StyledInput;
