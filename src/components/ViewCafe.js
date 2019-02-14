import React, { Component } from "react"

import CafeLayout from "./styled/CafeLayout"
import Heading from "./styled/Heading"

class ViewCafe extends Component {
  render() {
    // is no cafe is passed, no cafe has been clicked
    if(!this.props.cafe) {
      return <p>Cliquez sur un grain de café pour voir ses détails</p>
      }

    const { name, rating, comment, laptop, hours, url, osm } = this.props.cafe
    return (
      <CafeLayout>
        <Heading>
          { name }
          <br />
          { [...Array(rating)].map((star, key) =>
            <span role="img" aria-label="star emoji" key={key}>&#x2b50;</span>
          )}
        </Heading>
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
