import React from "react";
import { Button, Text } from "grommet";
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
      <Text>Log in:</Text>
      {providers.map(({ name, icon }) => (
        <Button
          plain
          key={name}
          icon={icon}
          onClick={() => props.login(name)}
        />
      ))}
    </>
  );
};
export default Login;
