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
          attribution="Map data &copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap contributors</a>, Mapbox Light tiles &copy; <a href='https://www.mapbox.com/about/maps/'>Mapbox</a>, coffee bean by Gyeong Seon Hong of <a href='https://thenounproject.com/icon/1886493/'>The Noun Project</a>"
          url="https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoicm9iaW5tZXRyYWwiLCJhIjoiY2pkMTI0bWVnMmV6dzM0bnNhZHBvMDBqeiJ9.Z0gZrvkth24hNkLkvRxg-g"
        />
        <Markers cafes={this.props.cafes} />
      </LeafletMap>
      )
  }
}

export default Map
