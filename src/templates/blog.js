import React from "react"
import styles from "./blog.module.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "./../components/seo"
import Layout from "./../components/layout"
import { DiscussionEmbed } from "disqus-react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"
import "../components/layout.css"

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
      content {
        childMarkdownRemark {
          html
        }
      }
      seoTitle
      featuredImage {
        resize(width: 1500, height: 750) {
          src
        }
      }
      seoKeywords
      seoAuthor
      seoDescription
      seoImage {
        fluid {
          src
        }
      }
    }
    file(name: { eq: "MikkelCodes" }) {
      childImageSharp {
        fixed(height: 40) {
          ...GatsbyImageSharpFixed_tracedSVG
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
  let markdown
  if (!props.data.contentfulBlogPost.content) {
    markdown = "<div></div>"
  } else {
    markdown = props.data.contentfulBlogPost.content.childMarkdownRemark.html
  }
  const disqusShortname = `mikkelcodes`
  const disqusConfig = {
    identifier: props.data.contentfulBlogPost.id,
    title: props.data.contentfulBlogPost.title.split(" ").join("-"),
    url: `https://mikkelcodes.com/blog/${props.data.contentfulBlogPost.title
      .split(" ")
      .join("-")}`,
  }

  let contentful = props.data.contentfulBlogPost

  return (
    <>
      <SEO
        title={props.data.contentfulBlogPost.seoTitle}
        description={props.data.contentfulBlogPost.seoDescription}
        keywords={props.data.contentfulBlogPost.seoKeywords}
        url={props.data.contentfulBlogPost.seoUrl}
        author={props.data.contentfulBlogPost.seoAuthor}
        image={props.data.contentfulBlogPost.seoImage.fluid.src}
      />
      <Layout>
        <div className="">
          
          <div
            className="absolute image flex items-center"
            style={{ top: "0px", left: "8vw", height: "12vh", zIndex: "100" }}
          >
            <Link to="/">
            <div>
              <Image fixed={props.data.file.childImageSharp.fixed} alt="logo"  />
            </div>
            </Link>
          </div>
          <div
            style={{
              backgroundImage: `url(${contentful.featuredImage.resize.src})`,
              backgroundSize: "cover",
              height: "75vh",
              position: "relative",
            }}
            className="flex items-center justify-center mb-10"
          >
            <div></div>
            <div className="text-white text-center flex flex-col max-w-twelve px-20 bg-black bg-opacity-50 p-12">
              <h2 className="text-2xl mb-2">
                {props.data.contentfulBlogPost.title}
              </h2>
              <small>
                {props.data.contentfulBlogPost.publishedDate} | Mikkel Klokkerud
              </small>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.content}>
            {documentToReactComponents(
              props.data.contentfulBlogPost.body.json,
              options
            )}
            <div dangerouslySetInnerHTML={{ __html: markdown }} />
          </div>
        </div>

        <div className={styles.disqus__container}>
          <div className={styles.disqus__content}>
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Blog
