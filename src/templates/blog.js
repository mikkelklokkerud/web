import React from "react"
import styles from "./blog.module.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "./../components/seo"
import Layout from "./../components/layout"
import { Link } from "gatsby"
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
        resize(width: 1600, height: 800) {
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
            className="block image flex items-center max-w-4xl justify-center mx-auto"
            style={{ height: "12vh" }}
          >
            <Link to="/">
              <div>
                <Image
                  fixed={props.data.file.childImageSharp.fixed}
                  alt="logo"
                  className="mb-0 pb-0"
                />
              </div>
              <div className="text-sm text-center -mt-2 font-thin">
                React + Headless CMS
              </div>
            </Link>
          </div>
          <div
            style={{
              backgroundImage: `url(${contentful.featuredImage.resize.src})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "50vh",
              position: "relative",
            }}
            className="flex items-center justify-center mb-6"
          />
          <div></div>
          <div className="text-center flex flex-col max-w-3xl mx-auto px-20 pb-6">
            <h1 className="text-2xl mb-2 font-bold">
              {props.data.contentfulBlogPost.title}
            </h1>
            <small>
              {props.data.contentfulBlogPost.publishedDate} | Mikkel Klokkerud
            </small>
          </div>
        </div>

        <div className="max-w-twelve mx-auto lg:mb-12 sm:mb-12">
          <div className={styles.content}>
            {documentToReactComponents(
              props.data.contentfulBlogPost.body.json,
              options
            )}
            <div dangerouslySetInnerHTML={{ __html: markdown }} />
          </div>
        </div>

        {/* <MailChimpForm /> */}
      </Layout>
    </>
  )
}

export default Blog
