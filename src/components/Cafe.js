import React, { Component } from "react"

class Cafe extends Component {
  render () {
    const { name, summary } = this.props.cafe
    return (
      <div>
        <h4>{ name }</h4>
        <p>{ summary }</p>
      </div>
    )
  }
}

export default Cafe
