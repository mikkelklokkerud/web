import React from "react"
import { graphql } from "gatsby";
import Post from "./../components/Post/Post"
import Layout from "../components/layout"
import Post_Smashing from "./../components/Post_Smashing/Post_Smashing";
import Hero_Featured from "./../components/Hero_featured/Hero_Featured"
import MailChimpForm from "./../components/MailChimpForm/MailChimpForm";
import SEO from "./../components/seo";
import styles from "./index.module.css";
import Divider_Colors from "../components/Divider/Divider_colors";

const IndexPage = ({ data }) => {
  const featuredType = "Post";
  const featured = data.allContentfulBlogPost.edges.filter(edge => edge.node.featured)
  let allPosts = data.allContentfulBlogPost.edges;
  // let latestPosts = data.allContentfulBlogPost.edges.slice(0, 2);
  return (
    <>
      <Layout>
        <SEO 
          title="Blog" 
          keywords={["web developer"], ["developer"], ["React"], ["gatsby"]}
        />

        <Hero_Featured 
          key={featured[0].node.id}
          title={featured[0].node.title}
          slug={featured[0].node.slug}
          publishedDate={featured[0].node.publishedDate}
          shortDescription={featured[0].node.shortDescription}
          featuredType={featuredType}
          page={"ARCHIVE"}
        />
        <Divider_Colors />
        <MailChimpForm />
        <Divider_Colors />
        <h1 style={{ textAlign: "center", marginTop: "100px", marginBottom: "30px" }}>Latest Posts</h1>
        {/* <div className={styles.latest__container}>
          <h1 className={styles.latest__title}>Latest posts.</h1>
          <div className={styles.latest__postscontainer}>
        {latestPosts.map(post => (
        <Post_Smashing
            key={post.node.id}
            title={post.node.title}
            slug={post.node.slug}
            published={post.node.publishedDate}
            shortDescription={post.node.shortDescription}
            publishedDate={post.node.publishedDate}
            featuredImage={post.node.featuredImage.resize.src}
          />
          ))}
          </div>
          </div> */}
        

        {allPosts.map(post => (
          <Post
            key={post.node.id}
            title={post.node.title}
            slug={post.node.slug}
            published={post.node.publishedDate}
            shortDescription={post.node.shortDescription}
            publishedDate={post.node.publishedDate}
            featuredImage={post.node.featuredImage.resize.src}
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
              resize (width: 420, height: 420) {
                src
              }
            }           
          }
        }
      }
    }
`






export default IndexPage
