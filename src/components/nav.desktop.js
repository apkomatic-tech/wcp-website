import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { RiArrowDownSLine } from "react-icons/ri"

const Nav = styled.nav`
  @media screen and (max-width: 767px) {
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
  @media screen and (max-width: 1024px) {
    grid-gap: 1rem;
    font-size: 1.5rem;
  }
`
const TopNavItem = styled.li`
  padding: 0;
  display: inline-block;
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
  // NOTE: keep dropdown class on Dropdown component so we can reference it from parent component ^
  .dropdown {
    visibility: hidden;
    transition: 0.1s 0.1s;
  }
  &:hover .dropdown,
  &:focus .dropdown {
    visibility: visible;
    transition-delay: 0;
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
  line-height: 1;
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
  top: calc(100% + 5px);
  min-width: 260px;
  background: var(--white);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  list-style: none;
  margin: 0;
  padding: 1rem 0;
`
const DropdownLink = styled(Link)`
  padding: 1rem;
  color: var(--black);
  display: block;
  &.active,
  &:hover,
  &:focus {
    background-color: #eeddf3;
    color: var(--primary);
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
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
        <TopNavItem>
          <TopNavLink activeClassName="active" to="/careers">
            Careers
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
