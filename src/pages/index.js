import React from "react"
import { graphql } from "gatsby"
import Seo from "./../components/Seo"
import Post from "./../components/Post"
import Layout from "../components/layout"
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
        <AlsoRead posts={allPosts} />
        <NetlifyForm />
      </Layout>
    </>
  )
}

const AlsoRead = ({ posts }) => (
  <>
    <h2
      className="text-2xl underline lg:text-3xl mt-12 lg:mt-20"
      style={{ textAlign: "center" }}
    >
      Latest articles
    </h2>
    <div className="max-w-twelve mx-auto flex flex-wrap justify-center mt-10 mb-20">
      {posts.map(post => (
        <Post
          key={post.node.id}
          title={post.node.title}
          slug={post.node.slug}
          published={post.node.publishedDate}
          shortDescription={post.node.shortDescription}
          publishedDate={post.node.publishedDate}
        />
      ))}
    </div>
  </>
)

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
