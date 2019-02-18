import React, { Component } from "react"
import styled from "styled-components"

import CafeLayout from "./styled/CafeLayout"
import Heading from "./styled/Heading"
import Emoji from "./Emoji"

const List = styled.ul`
  border-top: 1px solid lightgray;
  list-style-type: none;
  padding: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    margin-top: 0.5rem;
    a {
      text-decoration: none;
      color: inherit;
      &:hover {
        text-decoration: underline;
      }
    }
    img {
      margin-right: 1rem;
    }
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
        <Heading>{ name }</Heading>
        { [...Array(rating)].map((star, key) =>
        <Emoji unicode="2b50" alt="Star" key={key} />
        )}
        <p>{ comment }</p>
        <List>
          { laptop && (
          <li>
            <Emoji unicode="1f4bb" alt="Laptop Computer" />
            Recommandé pour travailler
          </li>
          ) }
          { url && (
          <li>
            <Emoji unicode="1f517" alt="Link" />
            <a href={ url }>{ url }</a>
          </li>
          ) }
          <li>
            <Emoji unicode="1f30d" alt="Globe Showing Europe-Africa" />
            <a href={`https://www.openstreetmap.org/node/${ osm }`}>Ouvrir dans OpenStreetMap</a>
          </li>
          <li>
            <Emoji unicode="1f557" alt="Eight O'Clock" />
            { hours }
          </li>
        </List>
      </CafeLayout>
      )
}
}

export default ViewCafe
