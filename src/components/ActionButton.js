import React from "react"
import styled from "styled-components"

import Emoji from "./Emoji.js"

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 1rem;
  &:hover {
    filter: brightness(75%);
  }
  img {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`

const ActionButton = (props) => (
  <Button
    onClick={props.action}
  >
    <Emoji unicode={props.unicode} alt={props.alt} />
    {props.title}
  </Button>
)

export default ActionButton
