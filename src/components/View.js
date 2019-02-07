import React, { Component } from "react"
import base from "../base"

class View extends Component {
  // initialize state
  state = {
    resume: {}
  }

  // fetch resume with firebase
  componentDidMount() {
    base.fetch(`resumes/${this.props.match.params.resumeId}`, {
      context: this
    }).then(data => {
      this.setState({
        resume: data
      })
    }).catch(error => {
      console.log("There was an error fetching data on firebase.")
    })
  }

  render() {
    if(Object.getOwnPropertyNames(this.state.resume).length === 0){
      return <p>No resume here :( Are you sure you have the right url?</p>
    }

    const { name, summary } = this.state.resume
    return (
      <div>
        <h1>{ name }</h1>
        <p>{ summary }</p>
      </div>
    )
  }
}

export default View
