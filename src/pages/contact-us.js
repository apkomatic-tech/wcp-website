import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import SEO from "../components/seo"

const CardDeck = styled.div`
  max-width: 96rem;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  @media screen and (max-width: 767px) {
    padding: 0;
    max-width: 100%;
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background: var(--white);
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: minmax(80px, 100px) 1fr;

  .email {
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  .card-image {
    object-fit: contain;
    width: 100%;
    max-width: 100px;
  }
  .card-content {
    padding: 0 0 1rem;
    @media screen and (min-width: 767px) {
      font-size: 1.5rem;
    }
  }

  h1 {
    font-size: 2rem;
    margin: 0 0 1rem;
  }
`

export default () => {
  const imageData = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "man-mock.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "woman-mock-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "man-mock-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
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
              fluid={imageData.image1.childImageSharp.fluid}
              alt="Ben Behzadi"
            />
          </div>

          <div className="card-content">
            <h1>Ben Behzadi</h1>
            <p>Executive Director</p>
            <p>
              Email:{" "}
              <a
                href="mailto:ben@workcreationprogram.com"
                style={{
                  whiteSpace: "pre-wrap",
                }}
              >
                ben@workcreationprogram.com
              </a>
            </p>
          </div>
        </Card>
        <Card>
          <div className="card-image">
            <Img
              fluid={imageData.image2.childImageSharp.fluid}
              alt="Ladan Kasmai"
            />
          </div>
          <div className="card-content">
            <h1>Ladan Kasmai</h1>
            <p>Co-Director</p>
            <p className="email">
              Email:{" "}
              <a href="mailto:ladan@workcreationprogram.com">
                ladan@workcreationprogram.com
              </a>
            </p>
          </div>
        </Card>
        <Card>
          <div className="card-image">
            <Img
              fluid={imageData.image3.childImageSharp.fluid}
              alt="john Doe"
            />
          </div>
          <div className="card-content">
            <h1>john Doe</h1>
            <p>Designer</p>
            <p>
              Email:{" "}
              <a href="mailto:jdoe@workcreationprogram.com">
                jdoe@workcreationprogram.com
              </a>
            </p>
          </div>
        </Card>
      </CardDeck>
    </>
  )
}
