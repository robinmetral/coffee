import React from "react"
import styled from "styled-components"

import Emoji from "./Emoji.js"

const Button = styled.button`
  width: 100%;
  padding: 1rem 0 1rem 0;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    filter: brightness(75%);
    border: 0;
  }
  &:first-child {
    background: green;
  }
  &:last-child {
    background: red;
  }
  img {
    margin-left: 0.5rem;
  }
`

const ActionButton = (props) => (
  <Button
    onClick={props.action}
  >
    {props.title}
    <Emoji unicode={props.unicode} alt={props.alt} />
  </Button>
)

export default ActionButton
