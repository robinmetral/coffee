import React from "react";
import styled from "styled-components";

import Emoji from "./Emoji.js";

const Button = styled.button`
  width: 100%;
  padding: 1rem 0 1rem 0;
  border: none;
  cursor: pointer;
  color: inherit;
  font-size: 1.2rem;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  &:first-child {
    background: hsl(200, 75%, 75%);
    &:hover {
      background: hsl(200, 75%, 85%);
    }
  }
  &:last-child {
    background: hsl(360, 75%, 75%);
    &:hover {
      background: hsl(360, 75%, 85%);
    }
  }
  img {
    margin-left: 0.5rem;
  }
`;

const ActionButton = props => (
  <Button onClick={props.action}>
    {props.title}
    <Emoji unicode={props.unicode} alt={props.alt} />
  </Button>
);

export default ActionButton;
