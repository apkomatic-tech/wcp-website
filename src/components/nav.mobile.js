import React, { useContext } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { RiCloseLine, RiArrowDownSLine } from "react-icons/ri"
import styled from "styled-components"

import { ctx } from "../context/nav"
import { media } from "../styles/mixins"
// function media(css, screensize = "small", minmax = "max") {
//   // large - 1024px
//   // small - 767px
//   const sizes = {
//     small: "767px",
//     large: "1024px",
//   }
//   if (!css || !sizes[screensize]) {
//     return ``
//   }
//   return `@media screen and (${minmax}-width: ${sizes[screensize]}) { ${css} }`
// }

// fancy svg background for mobile menu overlay
const navBackgroundStyles = `
  background-color: #682cbb;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23db1993'/%3E%3Cstop offset='1' stop-color='%23db1993' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23771be7'/%3E%3Cstop offset='1' stop-color='%23771be7' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fd139f'/%3E%3Cstop offset='1' stop-color='%23fd139f' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23682cbb'/%3E%3Cstop offset='1' stop-color='%23682cbb' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fb5607'/%3E%3Cstop offset='1' stop-color='%23fb5607' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%238b1fff'/%3E%3Cstop offset='1' stop-color='%238b1fff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`

const MobileNav = styled(motion.nav)`
  --textColor: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  align-items: flex-start;
  padding: 1rem 2rem;
  ${navBackgroundStyles};
  ul {
    list-style: none;
  }
`
const MobileNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 2rem;
  margin-bottom: 2rem;
`
const MobileBrand = styled(Link)`
  font-size: 1.8rem;
  color: var(--white);
`
const MobileClose = styled.button`
  border: 0;
  background: transparent;
  appearance: none;
  color: var(--textColor);
  font-size: 2.5rem;
  cursor: pointer;
  padding: 0;
  display: flex;
  justify-content: center;
`

const MobileNavList = styled.div`
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
    color: var(--textColor);
  }

  a.active {
    color: var(--white);
  }

  & > ul > li {
    margin-bottom: 1.2rem;
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .indented-list {
    > span {
      color: var(--textColor);
      display: flex;
      align-items: center;
      svg {
        font-size: 2rem;
      }
    }

    ul {
      padding-left: 2rem;
    }
    ul > li {
      margin-bottom: 1.2rem;
      &:first-of-type {
        margin-top: 1.2rem;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`

const mobileNavVariants = {
  visible: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.25,
    },
  },
  hidden: {
    x: "100%",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.25,
    },
  },
}

export default function ({ siteTitle }) {
  const { mobileNavOpen, closeMobileNav } = useContext(ctx)
  return (
    <MobileNav
      initial="hidden"
      animate={mobileNavOpen ? "visible" : "hidden"}
      variants={mobileNavVariants}
    >
      <MobileNavHeader>
        <MobileBrand to="/" onClick={closeMobileNav}>
          {siteTitle}
        </MobileBrand>
        <MobileClose
          className="close"
          type="button"
          onClick={() => closeMobileNav()}
        >
          <RiCloseLine />
        </MobileClose>
      </MobileNavHeader>
      <MobileNavList>
        <ul>
          <li>
            <Link activeClassName="active" to="/" onClick={closeMobileNav}>
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active"
              to="/about-us"
              onClick={closeMobileNav}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active"
              to="/careers"
              onClick={closeMobileNav}
            >
              Careers
            </Link>
          </li>
          <li className="indented-list">
            <span>
              Training <RiArrowDownSLine />
            </span>
            <ul>
              <li>
                <Link
                  activeClassName="active"
                  to="/training/work"
                  onClick={closeMobileNav}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  activeClassName="active"
                  to="/training/social"
                  onClick={closeMobileNav}
                >
                  Social Skills
                </Link>
              </li>
              <li>
                <Link
                  activeClassName="active"
                  to="/training/comminity"
                  onClick={closeMobileNav}
                >
                  Community Skills
                </Link>
              </li>
            </ul>
          </li>
          <li className="indented-list">
            <span>
              Programs <RiArrowDownSLine />
            </span>
            <ul>
              <li>
                <Link
                  activeClassName="active"
                  to="/programs/adult-developmental-center"
                  onClick={closeMobileNav}
                >
                  Adult Developmental Center
                </Link>
              </li>
              <li>
                <Link
                  activeClassName="active"
                  to="/programs/behavior-management-system"
                  onClick={closeMobileNav}
                >
                  Behavior Management System
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              activeClassName="active"
              to="/contact-us"
              onClick={closeMobileNav}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </MobileNavList>
    </MobileNav>
  )
}
