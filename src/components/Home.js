import React, { Component } from "react"

import Auth from "./Auth"

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Robin's Coffee Map</h1>
        <p>Welcome!</p>
        <Auth
          uid={this.props.uid}
          owner={this.props.owner}
          login={this.props.login}
          logout={this.props.logout}
        />
      </div>
    )
  }
}

export default Home
