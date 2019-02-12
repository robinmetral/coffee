import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: ${props => (props.panel === "closed") ? "none" : "block"};
  flex: 1;
`

const PanelLayout = (props) => (
  <Container panel={props.panel}>
    { props.children }
  </Container>
)

export default PanelLayout
