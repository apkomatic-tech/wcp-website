import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Page from "../styles/pageStyles"
import NavProvider from "../context/nav"
import Header from "./header"
import Footer from "./footer"

import "normalize.css"
import "../styles/global.css"

const Layout = ({ path, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title

  return (
    <>
      <NavProvider>
        <Header siteTitle={siteTitle} isHome={path === "/"} />
        {path === "/" ? children : <Page>{children}</Page>}
        {path !== "/" && <Footer siteTitle={siteTitle} />}
      </NavProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
