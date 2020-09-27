import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import globalStyles from "../styles/globalStyles"
import Nav from "./nav"
import "normalize.css"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${globalStyles}
        `}
      />
      <Nav />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
