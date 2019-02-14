import React, { Component } from "react"
import styled from "styled-components"

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(75%);
  }
`

const Link = styled.a`
  text-decoration: none;
  &:hover {
    filter: brightness(75%);
  }
`

const StyledEmoji = styled.span`
  font-size: 2rem;
`

const Emoji = (props) => (
  <StyledEmoji
    role="img"
    title={ props.title }
    aria-label={`${ props.description } emoji`}
  >
    { props.code }
  </StyledEmoji>
)

class Icon extends Component {
  render() {

    // desctructure
    const { code, description, title, action, url } = this.props

    // if button
    if (action) {
      return (
        <Button
          onClick={action}
          title={title}
        >
          <Emoji code={code} description={description} />
        </Button>
        )
    }

    // if link
    if (url) {
      return (
        <Link
          href={url}
          title={title}
        >
          <Emoji code={code} description={description} />
        </Link>
        )
    }

    // otherwise render static icon
    return <Emoji code={code} description={description} title={title} />
  }
}

export default Icon
