import React, { Component } from "react";
import { Button, Text, Box, Form, TextInput } from "grommet";
import { Github, Twitter, Facebook, Google } from "grommet-icons";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseApp } from "../base"

class Login extends Component {
  state = {
    signUp: false,
    name: ""
  };

  login = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(data =>
        data.additionalUserInfo.isNewUser
          ? console.log("New user")
          : console.log("Returning user")
      );
  };

  render() {
    const providers = [
      {
        provider: "Github",
        icon: <Github />
      },
      {
        provider: "Twitter",
        icon: <Twitter />
      },
      {
        provider: "Facebook",
        icon: <Facebook />
      },
      {
        provider: "Google",
        icon: <Google />
      }
    ];

    return (
      <Box direction="row" align="center">
        {this.state.signUp ? (
          <>
            <Text>How should we call you around here?</Text>
            <Form onSubmit={}>
            <TextInput />
            <Button type="submit" label={`Call me ${this.state.name}`} />
            </Form>
          </>
        ) : (
          <>
            <Text>Log in with:</Text>
            {providers.map(({ provider, icon }) => (
              <Button
                plain
                key={provider}
                icon={icon}
                onClick={() => this.login(provider)}
              />
            ))}
          </>
        )}
      </Box>
    );
  }
}
export default Login;
