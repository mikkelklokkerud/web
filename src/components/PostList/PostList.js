import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Post from "./../Post/Post"

const PostList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              date
              title
              path
              featured
            }
            excerpt
            html
          }
        }
      }
    }
  `)

  let posts = data.allMarkdownRemark.edges
  let featuredPost = posts.filter(
    post => post.node.frontmatter.featured === "true"
  )

  console.log(featuredPost)
  return (
    <>
      {posts.map(post => (
        <Post
          title={post.node.frontmatter.title}
          date={post.node.frontmatter.date}
          path={post.node.frontmatter.path}
          excerpt={post.node.excerpt}
          html={post.node.html}
          key={post.node.id}
        />
      ))}
    </>
  )
}

export default PostList
