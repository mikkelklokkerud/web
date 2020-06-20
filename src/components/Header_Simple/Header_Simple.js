import React, { Component } from "react"
import styles from "./Header_Simple.module.css"
import Link from "gatsby-link"
import { window } from "browser-monads"
import { slide as Menu } from 'react-burger-menu'
import "./burger.css"

let menuColors = {
  pageIsAbout: false,
  mainNavBg: "white",
  mainNavColor: "black",
  displayTagline: "none",
} 

class Header_Simple extends Component {
  render() {
    let menuColors = {}
    if (
      window.location.href.indexOf("about") < 1 ||
      (window.location.href.indexOf("-") > 1 && window.location.href.indexOf("about") > 1)
    ) {
        menuColors = {
            pageIsAbout: false,
            mainNavBg: "white",
            mainNavColor: "black",
            displayTagline: "none",
        }
    } else {
      menuColors = {
        pageIsAbout: true,
        mainNavBg: "black",
        mainNavColor: "white",
        displayTagline: "none",
      }
    }

    return (
      <>
        <div className={styles.mainNav}>
          <div className={styles.container}>
            <div className={styles.subcontainer}>
              <div className={styles.leftcontainer}>
                  <div className={styles.burger}>
                <Menu right>
                    <Link to={"/"}>Archive</Link>
                    <Link to={"/about"}>About</Link>
                </Menu>
                </div>
              </div>
              <nav
                className={styles.nav}
                style={{
                  backgroundColor: menuColors.mainNavBg,
                  color: menuColors.mainNavColor,
                }}
              >
                <ul className={styles.list}>
                  <Link to={"/"}>
                    <p
                      style={{ color: menuColors.mainNavColor }}
                      className={
                        window.location.href.length < 30
                          ? styles.link__active
                          : styles.link__inactive
                      }
                    >
                      ARCHIVE
                    </p>
                  </Link>
                  <Link to={"/about"}>
                    <p
                      style={{
                        color: menuColors.mainNavColor,
                        borderBottom: "1px solid white",
                      }}
                      className={
                        window.location.href.indexOf("about") > 0
                          ? styles.link__active
                          : styles.link__inactive
                      }
                    >
                      ABOUT
                    </p>
                  </Link>
                </ul>
                <div className={styles.burgerMenu}></div>
              </nav>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Header_Simple
