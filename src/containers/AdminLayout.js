import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: block;
  width: 50vw;
  height: 100vh;
  position: absolute;
  background: white;
  top: 0;
  right: -50vw;
  z-index: 1000;
  transition: transform ease 250ms;
  transform: ${props => props.panel ? "translate3d(-50vw, 0, 0)" : "none"};
`

const AdminLayout = (props) => (
  <Container panel={props.panel}>
    { props.children }
  </Container>
)

export default AdminLayout
