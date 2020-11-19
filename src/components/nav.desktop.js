import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { RiArrowDownSLine } from "react-icons/ri"

const DesktopNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  > ul > li {
    padding: 0;
    display: inline-block;
    margin: 0 3rem 0 0;
    @media screen and (max-width: 1024px) {
      margin: 0 2rem 0 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
  > ul > li.with-dropdown {
    button {
      appearance: none;
      color: var(--white);
      border: 0;
      background: transparent;
      cursor: pointer;
      outline: 0;
      display: flex;
      align-items: center;
      padding: 0;
      svg {
        margin-left: 0.5rem;
      }
    }
    position: relative;
    z-index: 1;
    .dropdown {
      box-sizing: border-box;
      position: absolute;
      left: 0;
      min-width: 260px;
      background: var(--white);
      visibility: hidden;
      // pointer-events: none;
      transition: opacity 50ms ease;
      padding: 1rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      border-top: 5px solid var(--red);
      a {
        color: var(--black);
      }
      a:hover,
      &:focus {
        color: var(--red);
      }
    }
    // dropdown interactions
    &:hover .dropdown,
    &:focus .dropdown {
      visibility: visible;
    }
  }
  > ul > li > a,
  > ul > li.with-dropdown > button {
    color: var(--white);
  }
  > ul > li:not(.with-dropdown) a {
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
    &.active:after,
    &:hover:after,
    &:focus:after {
      opacity: 1;
      transform: translateY(2px);
    }
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export default function () {
  return (
    <DesktopNav>
      <ul>
        <li>
          <Link activeClassName="active" to="/">
            Home
          </Link>
        </li>
        <li className="with-dropdown">
          <button type="button">
            Programs <RiArrowDownSLine />
          </button>
          <ul className="dropdown">
            <li>
              <Link
                activeClassName="active"
                to="/programs/adult-developmental-center"
              >
                Adult Developmental Center
              </Link>
            </li>
            <li>
              <Link
                activeClassName="active"
                to="/programs/behavior-management-system"
              >
                Behavior Management System
              </Link>
            </li>
          </ul>
        </li>
        <li className="with-dropdown">
          <button type="button">
            Training <RiArrowDownSLine />
          </button>
          <ul className="dropdown">
            <li>
              <Link activeClassName="active" to="/training/work">
                Work Training
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/training/social">
                Social Skills
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/training/community">
                Community Skills
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link activeClassName="active" to="/about-us">
            About
          </Link>
        </li>
      </ul>
    </DesktopNav>
  )
}
