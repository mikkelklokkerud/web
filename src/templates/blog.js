import React from "react"
import * as styles from "./blog.module.css"
import Image from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { SeoComponent } from "../components/SeoComponent"
import { LayoutComponent } from "../components/LayoutComponent"
import { Link, graphql } from "gatsby"
import { SocialShare } from "../components/SocialShare"

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

  const {
    seoKeywords,
    seoDescription,
    seoTitle,
    seoUrl,
    seoImage,
  } = props?.data?.contentfulBlogPost

  const twitterHandle = "MikkelCodes"
  const seoAuthor = "Mikkel Klokkerud"

  return (
    <>
      <SeoComponent
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        url={seoUrl}
        author={seoAuthor}
        image={seoImage.fluid.src}
      />
      <LayoutComponent>
        <div className="bg-gray-100 w-full">
          <div>
            <div
              className="block image flex items-center max-w-3xl justify-center mx-auto "
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
              className="lg:grid grid-cols-3 max-auto"
              style={{ gridTemplateColumns: "1fr minmax(500px, 865px) 1fr" }}
            >
              <div className="lg:flex hidden h-full justify-end items-center relative">
                <div className="w-20" />
                <div className="fixed top-1/2 transform -translate-y-1/2 mr-10">
                  <SocialShare
                    url={seoUrl}
                    title={seoTitle}
                    twitterHandle={twitterHandle}
                    tags={seoKeywords}
                    description={seoDescription}
                  />
                </div>
              </div>
              <div>
                <img
                  src={contentful.featuredImage.resize.src}
                  className="max-w-3xl mx-auto border-l-2 border-r-2 border-t-2 border-black shadow-xl rounded-t-md"
                  alt={seoTitle}
                />
                <div className="text-center flex flex-col max-w-3xl bg-white border-l-2 border-r-2 border-black shadow-xl mx-auto xl:px-20 lg:px-16 sm:px-6 pt-6">
                  <h1 className="text-2xl mb-2 font-bold">
                    {props.data.contentfulBlogPost.title}
                  </h1>
                  <small>
                    {props.data.contentfulBlogPost.publishedDate} | Mikkel
                    Klokkerud
                  </small>

                  <div className="text-left mx-auto lg:mb-12 sm:mb-12 mt-8">
                    <div className={`${styles.content}`}>
                      {renderRichText(
                        props.data.contentfulBlogPost.body,
                        options
                      )}
                      <div dangerouslySetInnerHTML={{ __html: markdown }} />
                    </div>
                  </div>
                </div>
              </div>
              <div />
            </div>
          </div>
        </div>
      </LayoutComponent>
    </>
  )
}

export default Blog
