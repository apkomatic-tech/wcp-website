import React, { useState } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"

const HeaderView = styled.header`
  position: ${props => (props.isHome ? "absolute" : "relative")};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: ${props => (props.isHome ? "transparent" : "var(--red)")};
  padding: 1rem 2rem;
`
const HeaderViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const BrandLink = styled(Link)`
  font-size: 2.6rem;
  color: var(--white);
  &:hover,
  &:focus {
    color: var(--white);
  }
  @media screen and (max-width: 767px) {
    font-size: 1.8rem;
  }
`
const DesktopNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 0;
    display: inline-block;
    margin: 0 3rem 0 0;
    &:last-child {
      margin-right: 0;
    }
  }
  a {
    color: var(--white);
    border-bottom: 2px solid transparent;
    position: relative;
    z-index: 1;
    &:after {
      content: "";
      width: 100%;
      height: 3px;
      background: var(--white);
      position: absolute;
      top: 100%;
      left: 0;
      opacity: 0;
      transform: translateY(4px);
      pointer-events: none;
      transition: transform 200ms;
    }
    &[aria-current]:after,
    &:hover:after {
      opacity: 1;
      transform: translateY(2px);
    }
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`
const DesktopNavContactBtn = styled(Link)`
  border: 2px solid var(--white);
  background: transparent;
  border-radius: 6px;
  text-align: center;
  color: var(--white);
  padding: 0.8rem 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  @media screen and (max-width: 767px) {
    display: none;
  }
`

const MobileNavToggle = styled.button`
  border: 0;
  background: transparent;
  appearance: none;
  color: var(--white);
  font-size: 2.5rem;
  cursor: pointer;
  @media screen and (min-width: 767px) {
    display: none;
  }
`

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background: var(--white);
  display: ${props => (props.show ? "block" : "none")};
  align-items: flex-start;
  padding: 1rem 2rem;

  ul {
    list-style: none;
  }
`

const MobileNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  * {
    display: inline-block;
  }
  .close {
    border: 0;
    background: transparent;
    appearance: none;
    color: var(--black);
    font-size: 2.5rem;
    cursor: pointer;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  .brand {
    font-size: 1.8rem;
    color: var(--black);
  }
`

const MobileNavList = styled.nav`
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  li {
    padding: 0;
    margin: 0;
  }

  a {
    display: block;
  }

  a[aria-current] {
    color: var(--red);
  }

  & > ul > li {
    margin-bottom: 1.2rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .indented-list {
    > span {
      color: rgba(0, 0, 0, 0.5);
    }

    ul {
      padding-left: 2rem;
    }
    ul > li {
      margin-bottom: 1.2rem;
      &:first-child {
        margin-top: 1.2rem;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

export default function ({ isHome }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <>
      <HeaderView isHome={isHome}>
        <HeaderViewContainer>
          <BrandLink to="/">Work Creation Program</BrandLink>
          <DesktopNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/training">Training</Link>
              </li>
              <li>
                <Link to="/programs">Programs</Link>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
            </ul>
          </DesktopNav>
          <DesktopNavContactBtn to="/contact">Contact Us</DesktopNavContactBtn>
          <MobileNavToggle onClick={() => setMobileNavOpen(true)}>
            <FaBars />
          </MobileNavToggle>
        </HeaderViewContainer>
      </HeaderView>
      <MobileNav show={mobileNavOpen}>
        <MobileNavHeader>
          <Link className="brand" to="/">
            Work Creation Program
          </Link>
          <button
            className="close"
            type="button"
            onClick={() => setMobileNavOpen(false)}
          >
            <FaTimes />
          </button>
        </MobileNavHeader>
        <MobileNavList>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="indented-list">
              <span>Training</span>
              <ul>
                <li>
                  <Link to="/training/work">Work</Link>
                </li>
                <li>
                  <Link to="/training/social">Social Skills</Link>
                </li>
                <li>
                  <Link to="/training/comminity">Community Skills</Link>
                </li>
              </ul>
            </li>
            <li className="indented-list">
              <span>Programs</span>
              <ul>
                <li>
                  <Link to="/programs/adult-developmental-center">
                    Adult Developmental Center
                  </Link>
                </li>
                <li>
                  <Link to="/programs/behavior-management-system">
                    Behavior Management System
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </MobileNavList>
      </MobileNav>
    </>
  )
}
