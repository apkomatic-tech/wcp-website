import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import SEO from "../components/seo";
import Page from "../styles/pageStyles";

const StyledBannerWithImage = styled.div`
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
  h1 {
    position: absolute;
    z-index: 2;
    color: #fff;
    font-size: 4rem;
    letter-spacing: 0.1rem;
    transform: translateX(-50%) translateY(-50%);
    left: 50%;
    top: 50%;
    @media screen and (max-width: 767px) {
      font-size: 3rem;
    }
  }
  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    pointer-events: none;
  }
`;

export default () => {
  const splashImage = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "about-us-splash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Page>
      <SEO title="About Us" />
      <StyledBannerWithImage>
        <h1>About Us</h1>
        <div className="backdrop"></div>
        <Img fluid={splashImage.image.childImageSharp.fluid} alt="About Us" />
      </StyledBannerWithImage>
      <div className="content-block">
        <h2>Company</h2>
        <p>
          Work Creation Programs provide community-based Vocational Training and
          Work Experience, Community Integration, and Social Skills Training for
          Adults with Developmental Disabilities who are interested in working
          and participating in the community in group settings.
        </p>
        <p>
          At the heart of WCP Inc. lies the commitment to provide excellence and
          to create the possibility of viable service enterprise in which all
          are indeed partners. We are geared toward empowering self and others,
          and we invite all to join in the process of improving the quality of
          our services and our training. Our Commitment towards training and
          development is to be on the leading edge of empowerment such that
          people lives are impacted for the highest and greatest good of all.
        </p>
        <p>
          Our goal is to integrate consumers into the community by empowering
          them to recognize and reach their maximum potential in supportive and
          nurturing environments.
        </p>
      </div>

      <div className="content-block">
        <h2>Training &amp; Skills</h2>
        <p>
          While intense training is provided in the vocational/entrepreneurial
          area, consumers are also encouraged to acquire a strong community and
          social awareness. We provide training in group setting only in
          real-world environments. All training is provided by qualified staff
          members with 1:3 or 1:4 staff-to-consumer ratios.
        </p>
      </div>

      <div className="content-block">
        <h2>Unique Programs</h2>
        <p>
          We are dedicated to design unique programs through understanding our
          consumers wants, wishes and dreams, and assisting them in attaining
          their personal goals with the purpose of living happier and more
          balanced lives.
        </p>
      </div>
      <div className="content-block">
        <h2>Self Advocacy</h2>
        <p>
          WCP Inc. believes in empowering it’s consumers to make choices and
          decisions in their lives. Training is provided in basic human rights
          and in the fundamental belief of equal opportunity for all. Emphasis
          is placed on strengthening participant’s self-esteem and broadening
          their perceived scope of capabilities.
        </p>
      </div>
    </Page>
  );
};
