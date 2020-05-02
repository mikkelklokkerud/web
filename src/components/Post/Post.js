import React, { Component } from "react"
import styles from "./Post.module.css"
import Link from "gatsby-link"


class Post extends Component {
  render() {
      const { published, title, slug, featuredImage, shortDescription } = this.props;

    return (
      <Link to={`/blog/${slug}`}>
        <div className={styles.container}>
        <div className={styles.subcontainer}>
          {/* <img className={styles.img} src={featuredImage} alt={title.rendered} /> */}
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <small className={styles.date}>
              Published: {published}
            </small>
            <div className={styles.excerpt}/>
          {shortDescription}</div>
        </div>
        </div>
      </Link>
    )
  }
}

export default Post
