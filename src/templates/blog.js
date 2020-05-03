import React from "react"
import styles from "./blog.module.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "./../components/layout"
import SEO from "./../components/seo";

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
          json
      }
      seoUrl
      seoTitle
      seoKeywords
      seoAuthor
      seoDescription
    }
  }
`

const Blog = props => {

    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title["en-US"]
                const url = node.data.target.fields.file["en-US"].url
                return <img alt={alt} src={url} />
            }
        }
    }

  return (
    <Layout>

    <SEO
      title={props.data.contentfulBlogPost.seoTitle}
      description={props.data.contentfulBlogPost.seoDescription}
      keywords={props.data.contentfulBlogPost.seoKeywords}
    />
    

        <div className={styles.container}>
        <div className={styles.content}>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <small>{props.data.contentfulBlogPost.publishedDate}</small>
      <small>Written by: Mikkel Klokkerud</small>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}

      </div>
      </div>
    </Layout>
  )
}

export default Blog