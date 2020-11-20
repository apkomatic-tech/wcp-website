import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import SEO from "../components/seo"

const CardDeck = styled.div`
  max-width: 96rem;
  margin: auto;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, minmax(250px, 450px));
  grid-gap: 2rem;
  justify-content: center;
  @media screen and (max-width: 767px) {
    padding: 0 5rem;
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background: var(--white);
  box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  .card-content {
    padding: 2rem;
  }
  .gatsby-image-wrapper {
    height: 290px;
    display: block;
    object-fit: fill;
  }

  h1 {
    font-size: 2rem;
    margin: 0 0 1rem;
  }
`

export default () => {
  const imageData = useStaticQuery(graphql`
    query {
      placeholderImage1: file(relativePath: { eq: "man-mock.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholderImage2: file(relativePath: { eq: "woman-mock.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Contact Us" />
      <h1>Contact Us</h1>
      <CardDeck>
        <Card>
          <div className="card-image">
            <Img
              fluid={imageData.placeholderImage1.childImageSharp.fluid}
              alt="Ben Behzadi"
            />
          </div>

          <div className="card-content">
            <h1>Ben Behzadi</h1>
            <p>Executive Director</p>
            <p>
              Email:{" "}
              <a href="mailto:ben@workcreationprogram.com">
                ben@workcreationprogram.com
              </a>
            </p>
          </div>
        </Card>
        <Card>
          <div className="card-image">
            <Img
              fluid={imageData.placeholderImage2.childImageSharp.fluid}
              alt="Ladan Kasmai"
            />
          </div>
          <div className="card-content">
            <h1>Ladan Kasmai</h1>
            <p>Executive Director</p>
            <p>
              Email:{" "}
              <a href="mailto:ladan@workcreationprogram.com">
                ladan@workcreationprogram.com
              </a>
            </p>
          </div>
        </Card>
      </CardDeck>
    </>
  )
}
