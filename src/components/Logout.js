import React from "react"

import StyledButton from "./styled/StyledButton"

const Logout = (props) => (
  <StyledButton onClick={props.logout}>Déconnexion</StyledButton>
)

export default Logout
