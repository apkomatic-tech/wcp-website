import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"

const numberOfNavLinks = 5

const HeaderStyles = styled.header`
  padding: 2rem 1rem;
  border-bottom: 3px solid var(--darkRed);
  a {
    text-decoration: none;
    color: var(--darkGrey);
  }
  .logo {
    background-color: var(--darkRed);
    color: var(--offWhite);
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(${numberOfNavLinks}, auto);
    grid-gap: 1rem;
    text-align: right;
  }
`
const HeaderWrapperStyles = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  justify-content: space-between;

  max-width: 96rem;
  margin: auto;
`

export default function Nav() {
  return (
    <HeaderStyles>
      <HeaderWrapperStyles>
        <Link className="logo" to="/">
          Work Creation Program
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Careers</Link>
          </li>
          <li>
            <Link to="/">Programs</Link>
          </li>
          <li>
            <Link to="/">Training</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </HeaderWrapperStyles>
    </HeaderStyles>
  )
}
