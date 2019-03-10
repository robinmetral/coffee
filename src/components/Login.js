import React, { Component } from "react";
import { Button, Text, Box } from "grommet";
import { Github, Twitter, Facebook, Google } from "grommet-icons";

class Login extends Component {
  render() {
    const providers = [
      {
        name: "Github",
        icon: <Github />
      },
      {
        name: "Twitter",
        icon: <Twitter />
      },
      {
        name: "Facebook",
        icon: <Facebook />
      },
      {
        name: "Google",
        icon: <Google />
      }
    ];

    return (
      <Box direction="row" align="center">
        <Text>Log in with:</Text>
        {providers.map(({ name, icon }) => (
          <Button
            plain
            key={name}
            icon={icon}
            onClick={() => props.login(name)}
          />
        ))}
      </Box>
    );
  }
}
export default Login;
