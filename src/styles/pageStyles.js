import React from "react"
import styled from "@emotion/styled"

const Page = styled.div`
  max-width: var(--maxWidth);
  margin: auto;
  padding: 3rem 2rem;
  @media screen and (min-width: 1024px) {
    padding: 3rem 8rem;
  }
  transition: padding 300ms;
  h1 {
    font-size: 3.2rem;
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`

export default Page
