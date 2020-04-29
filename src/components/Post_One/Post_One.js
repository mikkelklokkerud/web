import React from "react";
import styles from "./Post_One.module.css";
import Link from "gatsby-link";


const Post_One = ({data}) => (
    <>
      {data.allMarkdownRemark.edges.map(post => (
                <Link key={post.node.id} to={post.node.frontmatter.path}>
					<div className={styles.container}>
						<div className={styles.subcontainer}>
							{/* <img className={styles.img} src={imgurl} alt={title.rendered} /> */}

							<div className={styles.content}>
								<h1 className={styles.title}>{post.node.frontmatter.title}</h1>
								<small className={styles.date}>Published: {post.node.frontmatter.date}</small>
								<small className={styles.date}>Written by: Mikkel Klokkerud</small>
								<div
									className={styles.excerpt}
									// dangerouslySetInnerHTML={{ __html: excerpt }}
								/>
							</div>
						</div>
					</div>
				</Link>
      ))}
    </>
  )
  
  export const pageQuery = graphql`
    query BlogIndexdQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
              path
            }
            
          }
        }
      }
    }
  `

export default Post_One;