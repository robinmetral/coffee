import React from "react"

const TogglePanel = (props) => (
  <button onClick={props.togglePanel}>
    { props.panel === "open" ? "Close" : "Open" }
  </button>
)

export default TogglePanel
