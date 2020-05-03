import React from "react"
import Post from "./../components/Post/Post"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero_Featured from "./../components/Hero_featured/Hero_Featured"

const IndexPage = ({ data }) => {

  let featured = data.allContentfulBlogPost.edges.filter(edge => edge.node.featured)
  const allPosts = data.allContentfulBlogPost.edges;
  return (
    <>
      <Layout>
        <Hero_Featured 
          key={featured[0].node.id}
          title={featured[0].node.title}
          slug={featured[0].node.slug}
          publishedDate={featured[0].node.publishedDate}
          shortDescription={featured[0].node.shortDescription}
        />
        {allPosts.map(post => (
          <Post
            key={post.node.id}
            title={post.node.title}
            slug={post.node.slug}
            published={post.node.publishedDate}
            shortDescription={post.node.shortDescription}
            publishedDate={post.node.publishedDate}
            featuredImage={post.node.featuredImage.fluid.src}
          />
        ))}
      </Layout>
    </>
  )

        }

export const pageQuery = graphql`
  query BlogPostsQuery {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            featured
            shortDescription
            featuredImage {
              fluid {
                src
              }
            }           
          }
        }
      }
    }
`




export default IndexPage
