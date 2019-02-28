import React from "react";
import { createGlobalStyle } from "styled-components";
import { Grommet } from "grommet";

const GlobalStyle = createGlobalStyle`
  // Leaflet styles
  @import url("https://unpkg.com/leaflet@1.4.0/dist/leaflet.css");
  .leaflet-container {
    height: 100vh;
    width: 100vw;
  }
`;

const theme = {
  layer: {
    container: {
      zIndex: "1000"
    }
  }
};

const Layout = props => (
  <Grommet theme={theme} full={true}>
    <GlobalStyle />
    {props.children}
  </Grommet>
);

export default Layout;
