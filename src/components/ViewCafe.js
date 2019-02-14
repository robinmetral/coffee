import React, { Component } from "react"

import CafeLayout from "./styled/CafeLayout"
import Heading from "./styled/Heading"

class ViewCafe extends Component {
  render() {
    // is no cafe is passed, no cafe has been clicked
    if(!this.props.cafe) {
      return <p>Cliquez sur un grain de café pour voir ses détails</p>
      }

    // if a cafe has been clicked, render
    const { name, rating, comment, laptop, hours, url, osm } = this.props.cafe
    return (
      <CafeLayout>
        <Heading>{ name } &middot; { rating }</Heading>
        <p>{ comment }</p>
        <ul>
          <li>{ laptop ? "Bien pour les " : "Pas top pour les " }laptops</li>
          <li>Heures d'ouverture : { hours }</li>
        </ul>
        <p><a href={ url }>Site web</a> &middot; <a href={`https://www.openstreetmap.org/node/${ osm }`}>OpenStreetMap</a></p>
      </CafeLayout>
    )
  }
}

export default ViewCafe
