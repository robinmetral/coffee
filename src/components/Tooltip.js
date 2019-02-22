import React from "react"
import { Tooltip as LeafletTooltip } from "react-leaflet"

import Rating from "./Rating"

const Tooltip = (props) => (
  <LeafletTooltip direction="top">
    { props.name }<br />
    <Rating rating={ props.rating } />
  </LeafletTooltip>
)

export default Tooltip
