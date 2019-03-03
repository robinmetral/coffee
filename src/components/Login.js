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
    <>
      {providers.map(provider => (
        <Box>
          <Button
            key={provider.name}
            icon={provider.icon}
            label={`Login with ${provider.name}`}
            onClick={() => props.login(provider.name)}
          />
        </Box>
      ))}
    </>
  );
};
export default Login;
