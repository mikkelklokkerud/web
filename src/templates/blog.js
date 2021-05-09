import React from "react"
import * as styles from "./blog.module.css"
import Image from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { SeoComponent } from "../components/SeoComponent"
import { LayoutComponent } from "../components/LayoutComponent"
import { Link, graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      seoUrl
      body {
        raw
        references {
          contentful_id
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          title
          __typename
        }
      }
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
  console.log(props.data.contentfulBlogPost.body)
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log(node)
        const alt = node.data.target.title["en-US"]
        const image = node.data.target.gatsbyImageData
        return <GatsbyImage alt={alt} image={image} className="mt-2 mb-5" />
      },
    },
  }
  let markdown
  if (!props.data.contentfulBlogPost.content) {
    markdown = "<div></div>"
  } else {
    markdown = props.data.contentfulBlogPost.content.childMarkdownRemark.html
  }

  let contentful = props.data.contentfulBlogPost

  return (
    <>
      <SeoComponent
        title={props.data.contentfulBlogPost.seoTitle}
        description={props.data.contentfulBlogPost.seoDescription}
        keywords={props.data.contentfulBlogPost.seoKeywords}
        url={props.data.contentfulBlogPost.seoUrl}
        author={props.data.contentfulBlogPost.seoAuthor}
        image={props.data.contentfulBlogPost.seoImage.fluid.src}
      />
      <LayoutComponent>
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
            {renderRichText(props.data.contentfulBlogPost.body, options)}
            <div dangerouslySetInnerHTML={{ __html: markdown }} />
          </div>
        </div>
      </LayoutComponent>
    </>
  )
}

export default Blog
