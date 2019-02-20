import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  z-index: 1000;
  background: white;
  position: absolute;
  top: 0;
  right: -100vw;
  transition: transform ease 500ms;
  transform: ${props => (props.panel === "open") ? "translate3d(-100vw, 0, 0)" : "none"};
  // responsive styles
  @media (min-width: 992px) {
    width: 38vw;
    right: -38vw;
    transform: ${props => (props.panel === "open") ? "translate3d(-38vw, 0, 0)" : "none"};
    box-shadow: ${props => (props.panel === "open") ? "-5px 0 25px 0 rgba(0, 0, 0, 0.3)" : "none"};
  }
`

const PanelLayout = (props) => (
  <Container panel={props.panel}>
    { props.children }
  </Container>
)

export default PanelLayout
