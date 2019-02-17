import React from "react"
import { Helmet as ReactHelmet } from "react-helmet"

import favicon from "../assets/icon-coffee-bean.png"

const Helmet = (props) => (
  <ReactHelmet>
    <html lang="fr" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href={favicon} />
    <link rel="manifest" href={`${process.env.PUBLIC_URL}/manifest.json`} />
    
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#6F4E37" />

    <title>{ props.title === "" ? `Les cafés de Robin` : `${props.title} | Les cafés de Robin` }</title>
    <meta name="description" content="Une app React pour partager les cafés que j'aime !" />
  </ReactHelmet>
)

export default Helmet
