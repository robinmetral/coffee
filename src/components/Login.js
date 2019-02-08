import React from "react"
import PropTypes from "prop-types"

const Login = (props) => (
  <button onClick={() => props.login()}>Log in with Github</button>
)

Login.propTypes = {
  login: PropTypes.func.isRequired
}

export default Login
