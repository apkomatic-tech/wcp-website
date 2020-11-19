import React from "react"
import PropTypes from "prop-types"
import Page from "../styles/pageStyles"
import NavProvider from "../context/nav"
import Header from "./header"
import Footer from "./footer"

import "normalize.css"
import "../styles/global.css"

const Layout = ({ path, children }) => {
  return (
    <>
      <NavProvider>
        <Header isHome={path === "/"} />
        {path === "/" ? children : <Page>{children}</Page>}
        {path !== "/" && <Footer />}
      </NavProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
