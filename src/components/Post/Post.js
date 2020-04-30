import React, { Component } from "react"
import styles from "./Post.module.css"
import Link from "gatsby-link"


class Post extends Component {
  render() {
      const { date, title, excerpt, html, path } = this.props;

    return (
      <Link to={`${path}`}>
        <div className={styles.container}>
        <div className={styles.subcontainer}>
          {/* <img className={styles.img} src={imgurl} alt={title.rendered} /> */}
          <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <small className={styles.date}>
              Published: {date}
            </small>
    <div>{excerpt}</div>
            <div
              className={styles.excerpt}
              // dangerouslySetInnerHTML={{ __html: html }}
            />
          {excerpt}</div>
        </div>
        </div>
      </Link>
    )
  }
}

export default Post
