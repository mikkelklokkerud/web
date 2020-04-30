import React, { Component } from "react"
import styles from "./Hero_Featured.module.css"
import logo from "./MikkelCodes.png"
import Link from "gatsby-link"

class Hero_Featured extends Component {
  render() {
    const { date, title, path } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <img className={styles.logo} src={logo} />
          <div className={styles.btns}></div>
        </div>

        <Link to={`/`}>
          <div className={styles.subcontainer}>
            <div className={styles.content}>
              <h4 className={styles.subtitle}>Featured Post</h4>
              <h2 className={styles.title}></h2>
              <small className={styles.date}>Published: </small>
              <small className={styles.author}>
                Written by: Mikkel Klokkerud
              </small>
              <p className={styles.excerpt}></p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default Hero_Featured
