import React, { Component } from "react"

class Home extends Component {
  
  handleClick = () => {
    this.props.history.push("/app")
  }

  render() {
    return (
      <div>
        <h1>Hi <span role="img" aria-label="wave-emoji">👋</span></h1>
        <p>This is an app I'm developing that will let me manage and update resumes for jobs I'm applying to.</p>
        <p>It's still under development so you won't find anything here yet. If you want to stay up to date, don't hesitate to star or watch the <a href="https://github.com/robinmetral/resume">GitHub repo</a>!</p>
        <button onClick={this.handleClick}>Manage resumes</button>
      </div>
      )
  }
}

export default Home
