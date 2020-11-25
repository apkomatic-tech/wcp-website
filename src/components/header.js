import React, { useContext } from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import { RiArrowRightSLine, RiMenuLine } from "react-icons/ri"

import { ctx } from "../context/nav"
import DesktopNav from "./nav.desktop"
import MobileNav from "./nav.mobile"

const Header = styled.header`
  position: ${(props) => (props.isHome ? "absolute" : "relative")};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: ${(props) =>
    props.isHome ? "transparent" : "var(--primary)"};
  padding: 1rem 2rem;
`
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const HeaderBrand = styled(Link)`
  font-size: 2.2rem;
  color: var(--white);
  &:hover,
  &:focus {
    color: var(--white);
  }
  @media screen and (max-width: 767px) {
    font-size: 1.8rem;
  }
`

const HeaderContactButton = styled(Link)`
  border: 1px solid var(--white);
  background: transparent;
  border-radius: 6px;
  text-align: center;
  color: var(--white);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  &:hover,
  &:focus {
    background-color: var(--white);
    color: var(--black);
  }
  svg {
    font-size: 2rem;
    transition: transform 150ms ease;
  }
  &:hover svg {
    transform: translateX(4px);
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`
// styles specific to mobile
const NavToggle = styled.button`
  border: 0;
  background: transparent;
  appearance: none;
  color: var(--white);
  font-size: 2.5rem;
  cursor: pointer;
  padding: 0;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export default function ({ siteTitle, isHome }) {
  const { openMobileNav } = useContext(ctx)

  return (
    <>
      <Header isHome={isHome}>
        <HeaderContainer>
          <HeaderBrand to="/">{siteTitle}</HeaderBrand>
          <DesktopNav siteTitle={siteTitle} />
          <HeaderContactButton to="/contact-us">
            Contact Us <RiArrowRightSLine />{" "}
          </HeaderContactButton>
          <NavToggle onClick={() => openMobileNav()}>
            <RiMenuLine />
          </NavToggle>
        </HeaderContainer>
        <MobileNav siteTitle={siteTitle} />
      </Header>
    </>
  )
}
