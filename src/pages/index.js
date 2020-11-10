import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import SEO from "../components/seo"
import { primaryBtn, secondaryBtn } from "../styles/buttonStyles"
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
          <Link
            to="/"
            css={css`
              ${primaryBtn}
            `}
          >
            See our programs
          </Link>
        </HeroButtons>
      </div>
    </Hero>
  </>
)

export default IndexPage
