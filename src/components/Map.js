import React, { Component } from "react"
import { Map as LeafletMap, TileLayer } from "react-leaflet"

import Markers from "./Markers"

// leaflet styles and map container dimensions
import "../leaflet.css"

class Map extends Component {
  render() {
    return (
      <LeafletMap center={[52.5134, 13.4225]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Markers cafes={this.props.cafes} />
      </LeafletMap>
      )
  }
}

export default Map
