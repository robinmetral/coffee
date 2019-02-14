import React, { Component } from "react"

import CafeLayout from "./styled/CafeLayout"
import Heading from "./styled/Heading"
import Icon from "./Icon"

class ViewCafe extends Component {
  render() {
    // is no cafe is passed, no cafe has been clicked
    if(!this.props.cafe) {
      return null
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
          { laptop && (
          <li>
            <Icon
              code="&#x1f4bb;"
              description="laptop computer"
              title="good for laptops"
            />
          </li>
          ) }
          { url && (
          <li>
            <Icon
              code="&#x1f517;"
              description="link"
              title="website"
              url={url}
            />
          </li>
          ) }
          <li>
            <Icon
              code="&#x1f30d;"
              description="globe showing Europe-Africa"
              title="openstreetmap"
              url={`https://www.openstreetmap.org/node/${ osm }`}
            />
          </li>
          <li>Heures d'ouverture : { hours }</li>
        </ul>
      </CafeLayout>
    )
  }
}

export default ViewCafe
