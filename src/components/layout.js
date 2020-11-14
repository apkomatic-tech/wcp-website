import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import globalStyles from "../styles/globalStyles"
import Page from "../styles/pageStyles"
import Header from "./header"
import Footer from "./footer"

import "normalize.css"

const Layout = ({ path, children }) => {
  return (
    <>
      <Global
        styles={css`
          ${globalStyles}
        `}
      />
      <Header isHome={path === "/"} />
      {path === "/" ? children : <Page>{children}</Page>}
      {path !== "/" && <Footer />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
