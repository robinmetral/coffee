import React, { Component } from "react"
import base from "../base"

class View extends Component {
  // initialize state
  state = {
    cafe: {}
  }

  // fetch cafe with firebase
  componentDidMount() {
    base.fetch(`cafes/${this.props.match.params.cafeId}`, {
      context: this
    }).then(data => {
      this.setState({
        cafe: data
      })
    }).catch(error => {
      console.log("There was an error fetching data on firebase.")
    })
  }

  render() {
    if(Object.getOwnPropertyNames(this.state.cafe).length === 0){
      return <p>No cafe here :( Are you sure you have the right url?</p>
    }

    const { name, summary } = this.state.cafe
    return (
      <div>
        <h1>{ name }</h1>
        <p>{ summary }</p>
      </div>
    )
  }
}

export default View
