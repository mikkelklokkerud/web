import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Hero_Featured from "./../components/Hero_featured/Hero_Featured"
import Post from "./../components/Post/Post"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            featured
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <Hero_Featured />

        {data.allContentfulBlogPost.edges.map(post => (
          <Post
            title={post.node.title}
            slug={post.node.slug}
            published={post.node.publishedDate}
            featured={post.node.publishedDate}
          />
        ))}
      </Layout>
    </>
  )
}

export default IndexPage
