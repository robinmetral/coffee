import React from "react"
import PropTypes from "prop-types"

const Login = (props) => (
  <div>
    <h2>Login</h2>
    <p>Log in with GitHub to manage your online resumes.</p>
    <button onClick={() => props.authenticate()}>Log in with Github</button>
  </div>
)

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
}

export default Login
