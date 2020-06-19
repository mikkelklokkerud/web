import React from "react"
import { graphql } from "gatsby";
import Post from "./../components/Post/Post"
import Layout from "../components/layout"
import Hero_Featured from "./../components/Hero_featured/Hero_Featured"
import Services from "./../components/Services"
import MailChimpForm from "./../components/MailChimpForm/MailChimpForm";
import DividerText from "./../components/DividerText";
import SEO from "./../components/seo";
import NetlifyForm from "./../components/NetlifyForm/NetlifyForm";
import styles from "./index.module.css";
import Divider_Colors from "../components/Divider/Divider_Colors";


 

const IndexPage = ({ data }) => {
  const featuredType = "Post";
  const featured = data.allContentfulBlogPost.edges.filter(edge => edge.node.featured)
  let allPosts = data.allContentfulBlogPost.edges;
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

        <DividerText />
        <Services  />
        
        <div  id="signup" />
        {/* <MailChimpForm /> */}
        <h2 className={styles.archive__Title} style={{ textAlign: "center", marginTop: "100px", marginBottom: "0px" }}>Archive</h2>    
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
