import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

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
      placeholderImage: file(relativePath: { eq: "work.jpg" }) {
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
      <SEO title="Training - Work" />
      <h1>
        Training &gt; <span className="highlight">Work</span>
      </h1>
      <PageStyles>
        <div className="img-container">
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="Training Social Skills Image"
          />
        </div>
        <p>
          Employment Training and work experience will take Place “On-the-Job”.
          Using the supported work model, jobs will be found in the community.
          Participants will find themselves working on private and commercial
          sites contracted by WCP Inc. and additionally will find
          entrepreneurial partnerships contacts in the small business domain
          with the support structure to go for financial viability. The types of
          the work/business offered will be varied, to accommodate individual
          attitudes and interests.
        </p>
      </PageStyles>
    </>
  )
}
