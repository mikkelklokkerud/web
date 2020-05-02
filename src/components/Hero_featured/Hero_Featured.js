import React from "react"
import styles from "./Hero_Featured.module.css"
import logo from "./MikkelCodes.png"
import Link from "gatsby-link"

class Hero_Featured extends React.Component {
  render() {
    const { key, publishedDate, title, slug, shortDescription } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <img className={styles.logo} src={logo} />
          <div className={styles.btns}></div>
        </div>
        <div className={styles.right}>
          <Link key={key} to={`/blog/${slug}`}>
            <div className={styles.subcontainer}>
              <div className={styles.content}>
                <h4 className={styles.subtitle}>Featured Post</h4>
                <h2 className={styles.title}>{title}</h2>
                <small className={styles.date}>
                  Published: {publishedDate}
                </small>
                <small className={styles.author}>
                  Written by: Mikkel Klokkerud
                </small>
                <p className={styles.excerpt}>{shortDescription}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default Hero_Featured
