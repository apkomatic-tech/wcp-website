import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Button = styled.button`
  border-radius: 5px;
  background-color: ${props => (props.primary ? `var(--red)` : "var(--white")};
  color: ${props => (props.primary ? `var(--white)` : "var(--black")};
  padding: 1.5rem;
  border: 0;
`
const ButtonLink = Button.withComponent("a")`
    text-decoration: none;
`
export default function ({
  primary = true,
  isLink = false,
  to = "",
  href = "",
  ...rest
}) {
  if (isLink && to) {
    return <Link to={to} {...rest} />
  }
  if (isLink && href) {
    return <ButtonLink href={href} {...rest} primary={primary} />
  }

  return <Button {...rest} primary={primary} />
}
