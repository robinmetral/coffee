import React from "react"
import styled from "styled-components"

const Flexbox = styled.div`
  display: flex;
`

const Layout = (props) => (
  <Flexbox>
    { props.children }
  </Flexbox>
)

export default Layout
