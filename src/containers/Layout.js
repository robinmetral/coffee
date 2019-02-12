import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  // Leaflet styles
  @import url("https://unpkg.com/leaflet@1.4.0/dist/leaflet.css");
  .leaflet-container {
    height: 100vh;
    width: 100vw;
  }
`

const Container = styled.div`
`

const Layout = (props) => (
  <>
  <GlobalStyle />
  <Container>
    { props.children }
  </Container>
  </>
)

export default Layout
