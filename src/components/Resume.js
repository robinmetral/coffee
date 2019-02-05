import React, { Component } from "react"

class Resume extends Component {
  render () {
    const { name, summary } = this.props.resume
    return (
      <div>
        <h1>{ name }</h1>
        <p>{ summary }</p>
      </div>
    )
  }
}

export default Resume
