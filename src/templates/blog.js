import React from "react";
import * as styles from "./blog.module.css";
import Image from "gatsby-image";
import { GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { SeoComponent } from "../components/SeoComponent";
import { LayoutComponent } from "../components/LayoutComponent";
import { Link, graphql } from "gatsby";
import { SocialShare } from "../components/SocialShare";
import { SignUp } from "../components/SignUp";
import { window } from "browser-monads";

export const query = graphql`
  query ($slug: String!) {
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
        gatsbyImageData
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
`;

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.title["en-US"];
        const image = node.data.target.gatsbyImageData;
        return <GatsbyImage alt={alt} image={image} className="mt-2 mb-5" />;
      },
    },
  };
  let markdown;
  if (!props.data.contentfulBlogPost.content) {
    markdown = "<div></div>";
  } else {
    markdown = props.data.contentfulBlogPost.content.childMarkdownRemark.html;
  }

  let contentful = props.data.contentfulBlogPost;

  const { seoKeywords, seoDescription, seoTitle, seoUrl, seoImage, id } =
    props?.data?.contentfulBlogPost;

  const posts = props?.data?.allContentfulBlogPost?.edges;

  const twitterHandle = "MikkelCodes";
  const seoAuthor = "Mikkel Klokkerud";

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
        <div className="bg-gray-100 w-full px-5">
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
              className="lg:grid grid-cols-3 mx-auto"
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
                    id={id}
                    vertical
                  />
                </div>
              </div>
              <div>
                <div className="rgb max-w-3xl mx-auto border-l-2 border-r-2 border-t-2 border-black shadow-xl rounded-t-md overflow-hidden -mb-3 relative z-10">
                  <GatsbyImage
                    image={contentful.featuredImage.gatsbyImageData}
                    className="w-full"
                    alt={seoTitle}
                  />
                </div>
                <div className="rgb z-20 relative text-center flex flex-col max-w-3xl bg-white border-l-2 border-r-2 border-b-2 rounded-b-md border-black shadow-xl mx-auto xl:px-20 lg:px-16 sm:px-6 pt-6 mb-8">
                  <h1 className="text-2xl mb-2 font-bold">
                    {props.data.contentfulBlogPost.title}
                  </h1>
                  <small>
                    {props.data.contentfulBlogPost.publishedDate} | Mikkel
                    Klokkerud
                  </small>

                  <div className="text-left mx-auto lg:mb-12 mb-10 mt-8">
                    <div className={`${styles.content}`}>
                      {renderRichText(
                        props.data.contentfulBlogPost.body,
                        options
                      )}
                      <div dangerouslySetInnerHTML={{ __html: markdown }} />
                    </div>
                  </div>
                  <div className="lg:hidden mx-auto transform -translate-y-6 text-center">
                    <div className="w-full bg-black h-px mb-5 opacity-30" />
                    <div className="">
                      <SocialShare
                        url={seoUrl}
                        title={seoTitle}
                        twitterHandle={twitterHandle}
                        tags={seoKeywords}
                        description={seoDescription}
                        id={id}
                      />
                    </div>
                  </div>
                </div>
                <SignUp path={window.location.pathname} />
                <div className="mt-8 pb-8">
                  <div className="mx-auto max-w-3xl grid sm:grid-cols-3 grid-cols-1 gap-y-3 gap-x-4">
                    {posts &&
                      props?.data?.allContentfulBlogPost?.edges
                        .slice(0, 3)
                        .map(el => (
                          <Link
                            to={`/blog/${el.node.slug}`}
                            className="border-2 border-black rgb rounded-md bg-white p-4 shadow-xl hover:bg-black hover:text-white transition duration-100"
                          >
                            <div className="text-sm mb-1 italic">
                              <span className="sm:hidden">Published: </span>
                              {el.node.publishedDate}
                            </div>
                            <div className="font-bold">{el.node.title}</div>
                          </Link>
                        ))}
                  </div>
                </div>
                <Link
                  to="/#contact"
                  className="text-center block w-full border-2 border-black rgb rounded-md bg-white p-4 shadow-xl hover:bg-black hover:text-white transition duration-100"
                >
                  <div className="font-bold text-xl">Contact Me</div>{" "}
                  <div className="text-sm">I normally respond in 24h</div>
                </Link>
                <div className="pb-12" />
              </div>
              <div />
            </div>
          </div>
        </div>
      </LayoutComponent>
    </>
  );
};

export default Blog;
