import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default function About({ data }) {
  return (
    <Container>
      <div style={{ color: `teal` }}>
        <Header headerText={data.site.siteMetadata.title} />
        <p>Such wow. Very React</p>
        <p>
          We're the only site running on your computer dedicated to showing the
          best photos and videos of pandas eating lots of food.
        </p>
      </div>
    </Container>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
