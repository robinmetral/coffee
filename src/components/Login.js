import React from "react";
import { Box, Button, Text } from "grommet";
import { Github, Twitter, Facebook } from "grommet-icons";

const Login = props => {
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
    }
  ];

  return (
    <Box direction="row" align="center">
      <Text>Log in:</Text>
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
};
export default Login;
