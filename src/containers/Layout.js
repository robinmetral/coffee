import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  // Leaflet styles
  @import url("https://unpkg.com/leaflet@1.4.0/dist/leaflet.css");
  .leaflet-container {
    height: 100vh;
    width: 100%;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Layout = (props) => (
  <>
  <GlobalStyle />
  <Grid>
    { props.children }
  </Grid>
  </>
)

export default Layout
