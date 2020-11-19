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
      placeholderImage: file(relativePath: { eq: "social-skills.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <>
      <SEO title="Training - Social Skills" />
      <h1>
        Training &gt; <span className="highlight">Social Skills</span>
      </h1>
      <PageStyles>
        <div className="img-container">
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="Training Social Skills Image"
          />
        </div>
        <p>
          Training will take place at all settings. Participants will gain
          sufficient interpersonal and community skills to meet the emotional
          and situational demands of the working/business world. Individuals
          with behavior problems will learn socially acceptable alternatives to
          behavior limiting their ability to integrate into a community based
          life-style.
        </p>
      </PageStyles>
    </>
  )
}
