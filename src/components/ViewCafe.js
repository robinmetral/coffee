import React, { Component } from "react"
import styled from "styled-components"

import CafeLayout from "./styled/CafeLayout"
import Heading from "./styled/Heading"
import Icon from "./Icon"

const IconsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  li {
    margin-right: 0.5rem;
  }
`

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
        <IconsList>
          { laptop && (
          <li>
            <Icon
              code="&#x1f4bb;"
              description="laptop computer"
              title="Bien pour travailler"
            />
          </li>
          ) }
          { url && (
          <li>
            <Icon
              code="&#x1f517;"
              description="link"
              title="Site Web"
              url={url}
            />
          </li>
          ) }
          <li>
            <Icon
              code="&#x1f30d;"
              description="globe showing Europe-Africa"
              title="OpenStreetMap"
              url={`https://www.openstreetmap.org/node/${ osm }`}
            />
          </li>
          <li>
            <Icon
              code="&#x1f557;"
              description="eight o'clock"
              title={hours}
              url={`http://projets.pavie.info/yohours/?oh=${ hours }`}
            />
          </li>
        </IconsList>
      </CafeLayout>
    )
  }
}

export default ViewCafe
