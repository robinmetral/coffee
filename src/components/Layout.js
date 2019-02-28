import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Grommet } from "grommet";

const GlobalStyle = createGlobalStyle`
  // Leaflet styles
  @import url("https://unpkg.com/leaflet@1.4.0/dist/leaflet.css");
  .leaflet-container {
    height: 100vh;
    width: 50vw;
  }
`;

const theme = {
  layer: {
    container: {
      zIndex: "1000"
    }
  }
};

const Flex = styled.div`
  display: flex;
`;

const Layout = props => (
  <Grommet theme={theme} full={true}>
    <GlobalStyle />
    <Flex>{props.children}</Flex>
  </Grommet>
);

export default Layout;
