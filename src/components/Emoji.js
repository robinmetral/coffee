import React, { Component } from "react"
import styled from "styled-components"

const Img = styled.img`
  height: 1em;
  margin-right: 1rem;
`

class Emoji extends Component {
  render() {
    const source = require(`../assets/emojis/${this.props.unicode}.png`)
    return (
      <Img
        src={source}
        alt={`${this.props.alt} emoji`}
      />
    )
  }
}

export default Emoji
