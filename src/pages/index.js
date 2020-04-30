import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import PostList from "./../components/PostList/PostList";
import Hero_Featured from "./../components/Hero_featured/Hero_Featured";
import Post from "./../components/Post/Post";

const IndexPage = () => {
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

  const posts = data.allMarkdownRemark.edges;
  let featuredPost = posts.filter(
    post => post.node.frontmatter.featured === "true"
  )
  featuredPost = featuredPost[0].node;
  console.log(featuredPost.title)
  return (
    <>
      <Layout>

        <Hero_Featured featuredPost={featuredPost} />

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
      </Layout>
    </>
  )
}

export default IndexPage



