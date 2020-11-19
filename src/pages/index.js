import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import { ButtonLink } from "../components/shared/Button"
import heroBackground from "../images/hero.jpg"

const Hero = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
  background-image: url(${heroBackground});
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-position: center;
  h1 {
    margin: 0 0 2rem;
    color: var(--white);
    font-size: 4rem;
    text-transform: uppercase;
  }
  p {
    font-size: 2rem;
    color: var(--offWhite);
  }
  .hero-container {
    padding-left: 8rem;
    width: 50vw;

    @media screen and (max-width: 1024px) {
      padding-left: 2rem;
      padding-right: 2rem;
      width: 100vw;
    }
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 2.4rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
`

const HeroButtons = styled.div`
  display: flex;
  margin-top: 2rem;
  @media screen and (min-width: 640px) {
    a:not(:last-of-type) {
      margin-right: 1.5rem;
    }
  }
  @media screen and (max-width: 640px) {
    flex-direction: column;
    a {
      width: 100%;
      display: block;
      &:not(:last-of-type) {
        margin-bottom: 1rem;
      }
    }
  }
`

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero>
      <div className="hero-container">
        <h1>Work Creation Program</h1>
        <p>
          Integrate consumers into the community by empowering them to recognize
          and reach their maximum potential in supportive and nurturing
          environments.
        </p>
        <HeroButtons>
          <ButtonLink primary to="/">
            See our programs
          </ButtonLink>
          <ButtonLink to="/contact-us">Contact Us</ButtonLink>
        </HeroButtons>
      </div>
    </Hero>
  </>
)

export default IndexPage
