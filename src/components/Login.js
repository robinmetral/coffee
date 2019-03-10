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
          <Box direction="column">
            <Text>How should we call you around here?</Text>
            <Form onSubmit={this.signup}>
              <TextInput
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                required
              />
              <Button type="submit" label={`Call me ${this.state.name ? this.state.name : `...`}`} />
            </Form>
          </Box>
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
