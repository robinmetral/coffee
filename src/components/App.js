import React, { Component } from "react"
import Inventory from "./Inventory"
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
    resumes[`resume${Date.now()}`] = resume
    // set state
    this.setState({ resumes })
  }

  render() {
    return (
      <div>
        <Resume />
        <Inventory
          addResume={this.addResume}
        />
      </div>
    )
  }
}

export default App
