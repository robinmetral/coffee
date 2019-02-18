import React, { Component } from "react"

class Emoji extends Component {
  render() {
    const source = require(`../assets/emojis/${this.props.unicode}.png`)
    return (
      <img
        src={source}
        alt={`${this.props.alt} emoji`}
      />
    )
  }
}

export default Emoji
