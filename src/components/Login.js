import React from "react";
import { Button, Text, Box } from "grommet";
import { Github, Twitter, Facebook, Google } from "grommet-icons";

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
    },
    {
      name: "Google",
      icon: <Google />
    }
  ];

  return (
    <>
      <Text>Log in to review or add coffee shops!</Text>
      <Box direction="row" justify="center">
        {providers.map(({ name, icon }) => (
          <Button
            plain
            key={name}
            icon={icon}
            onClick={() => props.login(name)}
          />
        ))}
      </Box>
    </>
  );
};
export default Login;
