import React from "react"
import styles from "./blog.module.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "./../components/layout"
import SEO from "./../components/seo"
import { DiscussionEmbed } from "disqus-react"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
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
      seoImage {
        fluid {
          src
        }
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  const disqusShortname = `mikkelcodes`
  const disqusConfig = {
    identifier: props.data.contentfulBlogPost.id,
    title: props.data.contentfulBlogPost.title.split(" ").join("-"),
    url: `https://mikkelcodes.com/blog/${props.data.contentfulBlogPost.title.split(" ").join("-")}`,
  }

  console.log(props.data.contentfulBlogPost.title.split(" ").join("-"))

  return (
    <Layout>
      <SEO
        title={props.data.contentfulBlogPost.seoTitle}
        description={props.data.contentfulBlogPost.seoDescription}
        keywords={props.data.contentfulBlogPost.seoKeywords}
        url={props.data.contentfulBlogPost.seoUrl}
        author={props.data.contentfulBlogPost.seoAuthor}
        image={props.data.contentfulBlogPost.seoImage.fluid.src}
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <small>{props.data.contentfulBlogPost.publishedDate}</small>
          <small>Written by: Mikkel Klokkerud</small>
          {documentToReactComponents(
            props.data.contentfulBlogPost.body.json,
            options
          )}
        </div>
      </div>

      <div className={styles.disqus__container}>
        <div className={styles.disqus__content}>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      </div>
    </Layout>
  )
}

export default Blog
