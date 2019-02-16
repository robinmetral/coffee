import React from "react"
import styled from "styled-components"

const Container = styled.div`
  // position and animation
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: white;
  position: absolute;
  top: 0;
  right: -100vw;
  transition: transform ease 500ms;
  transform: ${props => (props.panel === "open") ? "translate3d(-100vw, 0, 0)" : "none"};
  box-shadow: ${props => (props.panel === "open") ? "-5px 0 25px 0 rgba(0, 0, 0, 0.3)" : "none"};
  // children
  display: grid;
  grid-template-columns: 1fr auto;
`

const PanelLayout = (props) => (
  <Container panel={props.panel}>
    { props.children }
  </Container>
)

export default PanelLayout
