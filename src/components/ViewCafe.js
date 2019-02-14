import React, { Component } from "react"
import styled from "styled-components"

import CafeLayout from "./styled/CafeLayout"
import Heading from "./styled/Heading"

const IconsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  li {
    display: flex;
  }
`

const Icon = styled.li`
  margin-top: 0.5rem;
  &::before {
    content: "${props => props.code}";
    margin-right: 1rem;
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
          <Icon code="\01F4BB">
            Recommandé pour travailler
          </Icon>
          ) }
          { url && (
          <Icon code="\01F517">
            <a href={ url }>{ url }</a>
          </Icon>
          ) }
          <Icon code="\01f30d">
            <a href={`https://www.openstreetmap.org/node/${ osm }`}>Ouvrir dans OpenStreetMap</a>
          </Icon>
          <Icon code="\01f557">
            { hours }
          </Icon>
        </IconsList>
      </CafeLayout>
    )
  }
}

export default ViewCafe
