import React, { Component } from "react"
import { Marker, Popup } from "react-leaflet"
import L from "leaflet"

const CoffeeBean = new L.Icon({
  iconUrl: require("../assets/icon-coffee-bean.png"),
  shadowUrl: require("../assets/icon-coffee-bean-shadow.png"),
  iconSize:     [32, 32], // size of the icon
  shadowSize:   [32, 32], // size of the shadow
  iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
  shadowAnchor: [16, 16], // the same for the shadow
  popupAnchor:  [2, -18]  // point from which the popup should open relative to the iconAnchor 
})

class Markers extends Component {
  render () {
    // if the request has loaded
    if(Object.getOwnPropertyNames(this.props.cafes).length > 0) {
      const { cafes } = this.props
      return (
        <>
        {
          Object.keys(cafes).map( cafe => (
            <Marker
              key={cafes[cafe].osm}
              position={cafes[cafe].coordinates}
              icon={CoffeeBean}
              onClick={this.props.handleClick}
            >
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
