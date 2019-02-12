import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 50vw;
  height: 100vh;
  z-index: 1000;
  background: white;
  position: absolute;
  top: 0;
  right: -50vw;
  transition: transform ease 500ms;
  transform: ${props => (props.panel === "open") ? "translate3d(-50vw, 0, 0)" : "none"};
`

const PanelLayout = (props) => (
  <Container panel={props.panel}>
    { props.children }
  </Container>
)

export default PanelLayout
