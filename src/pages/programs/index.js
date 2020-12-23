import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { RiArrowRightSLine } from "react-icons/ri"

import SEO from "../../components/seo"

const CardLinkGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    place-items: center;
    justify-content: center;
  }
`

const CardLink = styled(Link)`
  padding: 2rem;
  background: var(--primary);
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  opacity: 0.9;

  @media screen and (min-width: 767px) {
    justify-content: space-between;
  }

  &:hover,
  &:focus {
    opacity: 1;
    color: #fff;
  }
  h2 {
    text-align: center;
    margin: 0 2rem 0 0;
  }
  .arrow {
    font-size: 4rem;
  }
`

export default () => {
  return (
    <>
      <SEO title="Programs" />
      <h1>Programs</h1>
      <CardLinkGrid>
        <CardLink to="/programs/adult-developmental-center">
          <h2>Adult Developmental Center</h2>
          <RiArrowRightSLine className="arrow" />
        </CardLink>
        <CardLink to="/programs/behavior-management-system">
          <h2>Behavior Management System</h2>
          <RiArrowRightSLine className="arrow" />
        </CardLink>
      </CardLinkGrid>
    </>
  )
}
