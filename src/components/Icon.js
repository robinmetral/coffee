import React from "react"
import styled from "styled-components"

const StyledIcon = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    filter: brightness(75%);
  }
`

const Icon = (props) => (
  <StyledIcon
    onClick={props.action}
    title={props.title}
  >
    <span
      role="img"
      aria-label={`${props.description} emoji`}
    >
      {props.code}
    </span>
  </StyledIcon>
)

export default Icon
