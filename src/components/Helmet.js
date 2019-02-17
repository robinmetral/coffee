import React from "react"
import { Helmet as ReactHelmet } from "react-helmet"

import favicon from "../assets/icon-coffee-bean.png"
import screenshot from "../assets/screenshot.png"

const metadata = {
  title: "Les cafés de Robin",
  description: "Une app React pour partager les cafés que j'aime !",
  color: "#6F4E37",
  url: process.env.PUBLIC_URL,
}

const { title, description, color, url } = metadata

const Helmet = (props) => (
  <ReactHelmet>
    <html lang="fr" />
    <meta charSet="utf-8" />
    <link rel="icon" type="image/png" href={favicon} />
    <link rel="canonical" href={url} />
    <link rel="manifest" href={`${url}/manifest.json`} />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="theme-color" content={color} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:locale" content="fr" />
    <meta property="og:image" content={screenshot} />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="800" />
    <meta property="og:image:height" content="600" />
    <meta property="og:image:alt" content="Capture d'écran" />
    <title>{ props.name === "" ? title : `${props.name} | ${title}` }</title>
    <meta name="description" content={description} />
  </ReactHelmet>
)

export default Helmet
