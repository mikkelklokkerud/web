import React, { Component } from "react"
import styles from "./Post.module.css"
import Link from "gatsby-link"

class Post extends Component {
  render() {
    const {
      published,
      title,
      slug,
      featuredImage,
      shortDescription,
    } = this.props
    return (
      <Link to={`/blog/${slug}`}>
        <div className={styles.container}>
          <div className={styles.subcontainer}>
            <img
              className={styles.img}
              src={`https:${featuredImage}`}
              alt={title.rendered}
            />
            <div className={styles.content}>
              <div className={styles.respOverlay}>
              <h2 className={styles.title}>{title}</h2>
              <div className={styles.writtenByDate}>
                <small className={styles.date}>
                {published}
                </small>
              </div>
              <div className={styles.excerpt}>{shortDescription}</div>
            </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default Post
