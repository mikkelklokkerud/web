import React from "react"
import { graphql } from "gatsby"
import { Seo } from "../components/Seo"
import Posts from "./../components/Posts"
import Layout from "../components/Layout"
import Services from "./../components/Services"
import DividerText from "./../components/DividerText"
import NetlifyForm from "./../components/NetlifyForm"
import Hero from "./../components/Hero"

const IndexPage = ({ data }) => {
  const allPosts = data.allContentfulBlogPost.edges
  const featured = data.allContentfulBlogPost.edges.filter(
    edge => edge.node.featured
  )
  const { id, title, slug, publishedDate, shortDescription } = featured[0].node
  const keywords = ["web developer", "developer", "React", "gatsby"]
  const featuredType = "Post"
  return (
    <>
      <Layout>
        <Seo title="Blog" keywords={keywords} />
        <Hero
          key={id}
          title={title}
          slug={slug}
          publishedDate={publishedDate}
          shortDescription={shortDescription}
          featuredType={featuredType}
          page={"ARCHIVE"}
        />
        <DividerText />
        <Services />
        {/* <LatestArticles posts={allPosts} /> */}
        {/* <MailChimpForm /> */}
        <Posts posts={allPosts} title="Latest Articles" />
        <NetlifyForm />
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
        }
      }
    }
  }
`

export default IndexPage
