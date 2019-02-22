import React from "react"
import { Tooltip as LeafletTooltip } from "react-leaflet"

const Tooltip = (props) => (
  <LeafletTooltip direction="top">
    { props.name }
  </LeafletTooltip>
)

export default Tooltip
