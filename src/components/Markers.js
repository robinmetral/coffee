import React from "react"
import { Marker, Popup } from "react-leaflet"

const Markers = (props) => (
  <Marker position={[52.51306, 13.43174]}>
    <Popup>
      Hey!
    </Popup>
  </Marker>
)

export default Markers
