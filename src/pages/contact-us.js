import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import SEO from "../components/seo"

const PageStyles = styled.main`
  .company-people-block {
    max-width: 96rem;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    @media screen and (max-width: 767px) {
      padding: 0 5rem;
      grid-template-columns: 1fr;
    }
  }
`

const Card = styled.div`
  background: var(--white);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  .card-content {
    padding: 1rem;
  }
  .gatsby-image-wrapper {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 2rem auto;
    display: block;
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
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholderImage2: file(relativePath: { eq: "woman-mock.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
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
      <PageStyles>
        <div className="company-people-block">
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
        </div>
      </PageStyles>
    </>
  )
}
