import React from "react"
import { Helmet as ReactHelmet } from "react-helmet"

const Helmet = (props) => (
  <ReactHelmet>
    <title>{ props.title === "" ? `Les cafés de Robin` : `${props.title} | Les cafés de Robin` }</title>
    <meta name="description" content="Une app React pour partager les cafés que j'aime !" />
  </ReactHelmet>
)

export default Helmet
