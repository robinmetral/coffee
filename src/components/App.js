import React, { Component } from "react"
import Admin from "./Admin"
import Resume from "./Resume"

class App extends Component {
  // initialize state
  state = {
    resumes: {}
  }

  addResume = (resume) => {
    // take a copy of state to avoid mutations
    const resumes = { ...this.state.fishes }
    // add new resume
    resumes[`${Date.now()}`] = resume
    // set state
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
        />
      </div>
    )
  }
}

export default App
