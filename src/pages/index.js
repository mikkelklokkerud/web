import React from "react"
import Layout from "../components/layout"
import Link from "gatsby-link"
import styles from "./index.module.css"

const IndexPage = ({ data }) => (
  <>
    <Layout>
      {data.allMarkdownRemark.edges.map(post => (
        <Link key={post.node.id} to={post.node.frontmatter.path}>
          <div className={styles.container}>
            <div className={styles.subcontainer}>
              {/* <img className={styles.img} src={imgurl} alt={title.rendered} /> */}

              <div className={styles.content}>
                <h1 className={styles.title}>{post.node.frontmatter.title}</h1>
                <small className={styles.date}>
                  Published: {post.node.frontmatter.date}
                </small>
                <div
									className={styles.excerpt}
									dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
								/>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Layout>
  </>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            author
            date
            path
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
