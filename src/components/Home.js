import React, { Component } from "react"

import Auth from "./Auth"
import ViewCafe from "./ViewCafe"

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Carte des cafés de Robin ☕</h1>
        <ViewCafe
          cafe={this.props.cafe}
        />
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
