import React, { Component } from "react"

class Resume extends Component {
  render () {
    const { name, summary } = this.props.resume
    return (
      <div>
        <h4>{ name }</h4>
        <p>{ summary }</p>
      </div>
    )
  }
}

export default Resume
