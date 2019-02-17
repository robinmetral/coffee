import React from "react"
import { Helmet as ReactHelmet } from "react-helmet"

const Helmet = () => (
  <ReactHelmet
    titleTemplate="%s &middot; Les cafés de Robin"
    defaultTitle="Les cafés de Robin"
  >
    <meta name="description" content="Une app React pour partager les cafés que j'aime !" />
  </ReactHelmet>
)

export default Helmet
