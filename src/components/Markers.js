import React, { Component } from "react"
import { Marker, Popup } from "react-leaflet"

class Markers extends Component {
  render () {
    // if the request has loaded
    if(Object.getOwnPropertyNames(this.props.cafes).length > 0) {
      const { cafes } = this.props
      return (
        <>
        {
          Object.keys(cafes).map( cafe => (
            <Marker position={cafes[cafe].coordinates}>
              <Popup>{cafes[cafe].comment}</Popup>
            </Marker>
          ))
        }
        </>
      )
    }
    return (
      <p>Loading...</p>
      )
  }
}

export default Markers
