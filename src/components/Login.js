import React from "react"

import StyledButton from "./styled/StyledButton"

const Login = (props) => (
  <StyledButton onClick={() => props.login()}>Connexion</StyledButton>
)

export default Login
