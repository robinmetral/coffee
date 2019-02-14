import React from "react"
import styled from "styled-components"

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 1rem;
`

const Emoji = styled.span`
  font-size: 2rem;
  &:hover {
    filter: brightness(75%);
  }
`

const Icon = (props) => (
  <Button
    onClick={ props.action }
  >
    <Emoji
      role="img"
      aria-label={ `${ props.description } emoji` }
    >
      { props.code }
    </Emoji>
    { props.title }
  </Button>
)

export default Icon
