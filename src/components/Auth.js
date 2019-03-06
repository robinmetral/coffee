import React from "react";
import Login from "./Login";
import Logout from "./Logout";

const Auth = props => {
  return (
    <>
      {props.user ? (
        <Logout displayName={props.user.displayName} logout={props.logout} />
      ) : (
        <Login login={props.login} />
      )}
    </>
  );
};

export default Auth;
