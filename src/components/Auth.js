import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";

class Auth extends Component {
  render() {
    const { user } = this.props;
    return (
      <>
        {user ? (
          <Logout user={user} logout={this.props.logout} />
        ) : (
          <Login login={this.props.login} />
        )}
      </>
    );
  }
}

export default Auth;
