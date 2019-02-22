import React, { Component } from "react"
import { Marker, Tooltip } from "react-leaflet"
import L from "leaflet"

const CoffeeBean = new L.Icon({
  iconUrl: require("../assets/icon-coffee-bean.png"),
  shadowUrl: require("../assets/icon-coffee-bean-shadow.png"),
  iconSize:     [32, 32], // size of the icon
  shadowSize:   [32, 32], // size of the shadow
  iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
  shadowAnchor: [16, 16], // the same for the shadow
  tooltipAnchor:  [1, -17]  // point from which the tooltip should open relative to the iconAnchor 
})

class Markers extends Component {
  render () {
    // if the request has loaded
    if(Object.getOwnPropertyNames(this.props.cafes).length > 0) {
      const { cafes } = this.props
      return (
        <>
        {
          Object.keys(cafes).map( osm => (
            <Marker
              key={osm}
              position={cafes[osm].coordinates}
              icon={CoffeeBean}
              onClick={this.props.handleClick}
            >
              <Tooltip
                direction="top"
              >
                {cafes[osm].name} &middot; <strong>{cafes[osm].rating}</strong>
              </Tooltip>
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
