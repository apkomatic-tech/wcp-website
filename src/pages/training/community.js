import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import SEO from "../../components/seo"

const PageStyles = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 3rem;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-gap: 2rem;
    .img-container {
      grid-row: 2;
    }
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "community.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Training - Community" />
      <h1>
        Training &gt; <span className="highlight">Community Skills</span>
      </h1>
      <PageStyles>
        <div className="img-container">
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="Community Skills Image"
          />
        </div>
        <p>
          Community Skills Training will take place while utilizing integrated
          community resources for recreation, work and personal needs.
          Participants will receive training in acceptable interaction patterns
          with various community members. Training will include business
          conversation to empower ownership and/or management skills. Training
          will also maintain basic survival/pedestrian safety and functional use
          of money.
        </p>
      </PageStyles>
    </>
  )
}
