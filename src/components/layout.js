/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header_Simple from "./Header_Simple/Header_Simple";
import styles from "./layout.module.css";
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Header_Simple siteTitle={data.site.siteMetadata.title} />


        <main>{children}</main>
        <footer className="flex items-center justify-center">
          <div className="flex justify-center items-center flex-col md:flex-row">
            <div className="flex max-w-md">
                <p className="pt-0 mb-0 text-grey text-sm">Mikkel Klokkerud | Copyright 2020 | MikkelCodes.com </p>
            </div>
          </div>
        </footer>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
