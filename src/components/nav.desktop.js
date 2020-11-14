import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

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
    &:last-child {
      margin-right: 0;
    }
  }
  > ul > li.with-dropdown {
    button[type="button"] {
      appearance: none;
      color: var(--white);
      border: 0;
      background: transparent;
      cursor: pointer;
      outline: 0;
    }
    position: relative;
    z-index: 1;
    span {
      cursor: pointer;
    }
    .dropdown {
      box-sizing: border-box;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      min-width: 220px;
      background: var(--white);
      opacity: 0;
      pointer-events: none;
      transition: opacity 50ms ease;
      padding: 1rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      &:before {
        content: "";
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-top: 10px solid transparent;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid var(--white);
        display: block;
        position: absolute;
      }
      a {
        color: var(--black);
      }

      &.show {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
  > ul > li > a,
  > ul > li.with-dropdown > button {
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
    &.active:after,
    &:hover:after,
    &:focus:after {
      opacity: 1;
      transform: translateY(2px);
    }
  }
  @media screen and (max-width: 767px) {
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
          <button type="button" onClick={() => alert("click")}>
            Programs
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
          <button type="button">Training</button>
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
