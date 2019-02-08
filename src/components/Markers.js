import React, { Component } from "react"
import { Marker, Popup } from "react-leaflet"

class Markers extends Component {
  render () {
    // if the request has loaded
    if(Object.getOwnPropertyNames(this.props.cafes).length > 0) {
      return (
        <Marker position={[52.51306, 13.43174]}>
          <Popup>{this.props.cafes["2640326880"].comment}</Popup>
        </Marker>
        )
    }
    return (
      <p>Loading...</p>
    )
  }
}

export default Markers
