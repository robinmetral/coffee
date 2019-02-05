import React, { Component } from "react"
import Admin from "./Admin"
import Resume from "./Resume"
import base from "../base"

class App extends Component {
  // initialize state
  state = {
    resumes: {}
  }

  componentDidMount() {
    this.ref = base.syncState(`resumes`, {
      context: this,
      state: "resumes"
    })
  }

  // remove binding to avoid memory leak
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addResume = (resume) => {
    // take a copy of state to avoid mutations
    const resumes = { ...this.state.resumes }
    // add new resume
    resumes[`${Date.now()}`] = resume
    // set state
    this.setState({ resumes })
  }

  updateResume = (key, updatedResume) => {
    const resumes = { ...this.state.resumes }
    resumes[key] = updatedResume
    this.setState({ resumes })
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.resumes).map(key => (
        <Resume
          key={key}
          resume={this.state.resumes[key]}
        />
        ))}
        <Admin
          addResume={this.addResume}
          updateResume={this.updateResume}
          resumes={this.state.resumes}
        />
      </div>
    )
  }
}

export default App
