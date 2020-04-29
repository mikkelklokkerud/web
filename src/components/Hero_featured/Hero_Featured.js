import React, { Component } from "react"
import styles from "./Hero_Featured.module.css"
import logo from "./MikkelCodes.png"
import  Link  from "gatsby-link"

class Hero_Featured extends Component {
  render() {
    let published
    // if (this.props.date.length < 1) { published = "Loading..." } else { published = "Published: "}
    // const { date, excerpt, title, id } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <img className={styles.logo} src={logo} />
          <div className={styles.btns}></div>
        </div>
        <Link to={`/post/someid`}>
          <div className={styles.subcontainer}>
            <div className={styles.content}>
              <h4 className={styles.subtitle}>Featured Post</h4>
              <h2 className={styles.title}>Some title goes here</h2>
              <small className={styles.date}>{published} 12 32 some date</small>
              <small className={styles.author}>
                Written by: Mikkel Klokkerud
              </small>
              <div
                className={styles.excerpt}
                dangerouslySetInnerHTML={{
                  __html: "<p> excerpt comes here is html </p>",
                }}
              />
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default Hero_Featured
