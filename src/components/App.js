import React, { Component } from "react"
import Admin from "./Admin"
import Resume from "./Resume"
import base from "../base"

class App extends Component {
  // initialize state
  state = {
    resumes: {}
  }

  // sync state with firebase
  componentDidMount() {
    this.ref = base.syncState(`resumes`, {
      context: this,
      state: "resumes"
    })
  }

  // remove binding when unmounting to avoid memory leak
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addResume = (resume) => {
    // take a copy of state
    const resumes = { ...this.state.resumes }
    // add new resume
    resumes[`${Date.now()}`] = resume
    // set state
    this.setState({ resumes })
  }

  updateResume = (key, updatedResume) => {
    // take a copy of state
    const resumes = { ...this.state.resumes }
    // update single resume object
    resumes[key] = updatedResume // overriding
    // set state
    this.setState({ resumes })
  }

  deleteResume = (key) => {
    // take a copy of state
    const resumes = { ...this.state.resumes }
    // remove single resume object
    resumes[key] = null // need to set to null to work with Firebase
    // set state
    this.setState({ resumes })
  }

  render() {
    return (
      <div>
        <Admin
          addResume={this.addResume}
          updateResume={this.updateResume}
          deleteResume={this.deleteResume}
          resumes={this.state.resumes}
        />
      </div>
    )
  }
}

export default App
