import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
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
