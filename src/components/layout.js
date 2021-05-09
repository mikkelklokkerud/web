import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header_Simple from "./Header_Simple/Header_Simple"
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
      <main>{children}</main>
      <footer className="flex items-center justify-center bg-black">
        <div className="flex justify-center items-center flex-col md:flex-row">
          <div className="flex max-w-md h-20 items-center">
            <p className="pt-0 mb-0 text-white text-base tracking-wide text-xs">
              Mikkel Klokkerud | ©2019-2021 | MikkelCodes.com{" "}
            </p>
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
