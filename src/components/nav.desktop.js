import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { RiArrowDownSLine } from "react-icons/ri"

const Nav = styled.nav`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`
const TopNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 3rem;
`
const TopNavItem = styled.li`
  padding: 0;
  display: inline-block;
  /* margin: 0 3rem 0 0; */
  @media screen and (max-width: 1024px) {
    margin: 0 2rem 0 0;
  }
  /* &:last-of-type {
    margin-right: 0;
  } */
`
const TopNavLink = styled(Link)`
  position: relative;
  z-index: 1;
  color: var(--white);
  opacity: 0.8;
  &.active,
  &:hover,
  &:focus {
    opacity: 1;
    color: var(--white);
  }
`

const TopNavItemWithDropdown = styled.li`
  position: relative;
  z-index: 1;
  &:hover .dropdown,
  &:focus .dropdown {
    visibility: visible;
  }
`
const DropdownButton = styled.button`
  appearance: none;
  color: var(--white);
  opacity: 0.8;
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

  &:hover,
  &:focus {
    opacity: 1;
  }
`
const Dropdown = styled.ul`
  box-sizing: border-box;
  position: absolute;
  left: 0;
  min-width: 260px;
  background: var(--white);
  visibility: hidden;
  transition: opacity 50ms ease;
  padding: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-top: 5px solid var(--secondary);
  list-style: none;
  margin: 0;
`
const DropdownLink = styled(Link)`
  color: var(--black);
`

export default function () {
  return (
    <Nav>
      <TopNavList>
        <TopNavItem>
          <TopNavLink activeClassName="active" to="/">
            Home
          </TopNavLink>
        </TopNavItem>
        <TopNavItem>
          <TopNavLink activeClassName="active" to="/about-us">
            About
          </TopNavLink>
        </TopNavItem>
        <TopNavItemWithDropdown>
          <DropdownButton type="button">
            Programs <RiArrowDownSLine />
          </DropdownButton>
          <Dropdown className="dropdown">
            <li>
              <DropdownLink
                activeClassName="active"
                to="/programs/adult-developmental-center"
              >
                Adult Developmental Center
              </DropdownLink>
            </li>
            <li>
              <DropdownLink
                activeClassName="active"
                to="/programs/behavior-management-system"
              >
                Behavior Management System
              </DropdownLink>
            </li>
          </Dropdown>
        </TopNavItemWithDropdown>
        <TopNavItemWithDropdown className="with-dropdown">
          <DropdownButton type="button">
            Training <RiArrowDownSLine />
          </DropdownButton>
          <Dropdown className="dropdown">
            <li>
              <DropdownLink activeClassName="active" to="/training/work">
                Work Training
              </DropdownLink>
            </li>
            <li>
              <DropdownLink activeClassName="active" to="/training/social">
                Social Skills
              </DropdownLink>
            </li>
            <li>
              <DropdownLink activeClassName="active" to="/training/community">
                Community Skills
              </DropdownLink>
            </li>
          </Dropdown>
        </TopNavItemWithDropdown>
      </TopNavList>
    </Nav>
  )
}
