import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Button = styled.button`
  appearance: none;
  border-radius: 5px;
  border: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  padding: 1rem 1.5rem;
  text-decoration: none;
  text-align: center;
  transition: 100ms ease;
  background-color: ${(props) =>
    props.primary ? "var(--red)" : "var(--yellow)"};
  color: ${(props) => (props.primary ? "var(--white)" : "var(--black)")};
  &:hover,
  &:active,
  &:focus {
    color: ${(props) => (props.primary ? "var(--white)" : "var(--black)")};
  }
`
const ButtonLink = Button.withComponent(Link)
const ButtonLinkExternal = Button.withComponent("a")

export { Button, ButtonLink, ButtonLinkExternal }
