import React, { Component } from "react"
import styled from "styled-components"

import CafeLayout from "./styled/CafeLayout"
import Heading from "./styled/Heading"
import Icon from "./Icon"

const IconsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  li {
    display: flex;
  }
`

const Label = styled.span`
  a {
    text-decoration: none;
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
            <Label>Recommandé pour travailler</Label>
          </li>
          ) }
          { url && (
          <li>
            <Icon
              code="&#x1f517;"
              description="link"
              title="Site Web"
              url={ url }
            />
            <Label><a href={ url }>{ url }</a></Label>
          </li>
          ) }
          <li>
            <Icon
              code="&#x1f30d;"
              description="globe showing Europe-Africa"
              title="OpenStreetMap"
              url={`https://www.openstreetmap.org/node/${ osm }`}
            />
            <Label><a href={`https://www.openstreetmap.org/node/${ osm }`}>Ouvrir dans OpenStreetMap</a></Label>
          </li>
          <li>
            <Icon
              code="&#x1f557;"
              description="eight o'clock"
              title={hours}
              url={`http://projets.pavie.info/yohours/?oh=${ hours }`}
            />
            <Label>{ hours }</Label>
          </li>
        </IconsList>
      </CafeLayout>
    )
  }
}

export default ViewCafe
