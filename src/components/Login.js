import React from "react";
import { Box, Button } from "grommet";
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
    <Box>
      {providers.map(({ name, icon }) => (
        <Button
          key={name}
          icon={icon}
          label={`Login with ${name}`}
          onClick={() => props.login(name)}
        />
      ))}
    </Box>
  );
};
export default Login;
