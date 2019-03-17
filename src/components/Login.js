import React, { Component } from "react";
import { Button, Text, Box, Form, TextInput } from "grommet";
import { Github, Twitter, Facebook, Google } from "grommet-icons";
import firebase from "firebase/app";
import "firebase/auth";
import base, { firebaseApp } from "../base";

class Login extends Component {
  state = {
    signUp: false,
    name: "",
    uid: ""
  };

  signup = () => {
    // add user to Firebase
    base
      .post(`users/${this.state.uid}`, {
        data: { name: this.state.name }
      })
      .then(() => {
        this.props.authHandler(this.state.uid);
      })
      .catch(error => {
        console.log(error);
      });
  };

  login = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(data =>
        data.additionalUserInfo.isNewUser
          ? this.setState({
              signUp: true,
              uid: data.user.uid
            })
          : this.props.authHandler(data.user.uid)
      );
  };

  render() {
    const providers = [
      {
        provider: "Github",
        icon: <Github color="plain" />
      },
      {
        provider: "Twitter",
        icon: <Twitter color="plain" />
      },
      {
        provider: "Facebook",
        icon: <Facebook color="plain" />
      },
      {
        provider: "Google",
        icon: <Google color="plain" />
      }
    ];

    if (this.state.signUp)
      return (
        <Box>
          <Text>How should we call you around here?</Text>
          <Form onSubmit={this.signup}>
            <TextInput
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              required
            />
            <Button
              type="submit"
              label={`Call me ${this.state.name ? this.state.name : `...`}`}
            />
          </Form>
        </Box>
      );

    // user is not signing up
    return (
      <>
        <Text>
          Log in with any of the following services to start contributing.
        </Text>
        <Box margin="small" gap="xsmall">
          {providers.map(({ provider, icon }) => (
            <Button
              label={`Log in with ${provider}`}
              key={provider}
              icon={icon}
              onClick={() => this.login(provider)}
            />
          ))}
        </Box>
        <Text size="small">
          We need your email address to know it's you the next time you sign in.
          That's it.
        </Text>
      </>
    );
  }
}
export default Login;
