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

const Blog = props => {
  const postDetails = props.data.contentfulBlogPost;
  const { seoKeywords, seoDescription, seoTitle, seoUrl, seoImage, content } =
    postDetails;

  const posts = props?.data?.allContentfulBlogPost?.edges;
  const twitterHandle = "MikkelCodes";
  const seoAuthor = "Mikkel Klokkerud";

  // Use GatsbyImage for rich text images from Contenful CMS
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.title["en-US"];
        const image = node.data.target.gatsbyImageData;
        return <GatsbyImage alt={alt} image={image} className="mt-2 mb-5" />;
      },
    },
  };

  return (
    <LayoutComponent gray>
      <SeoComponent
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        url={seoUrl}
        author={seoAuthor}
        image={seoImage.fluid.src}
      />
      <BlogHeader image={props.data.file.childImageSharp.fixed} />
      <BlogWrapper>
        <SocialComponent {...postDetails} twitterHandle={twitterHandle} />
        <div>
          <BlogContent options={options} content={content} {...postDetails} />
          <SignUp path={window.location.pathname} />
          <ReadAlso posts={posts} />
          <ContactButton />
          <div className="pb-12" />
        </div>
        <div />
      </BlogWrapper>
    </LayoutComponent>
  );
};

export default Blog;

const BlogContent = ({
  featuredImage,
  title,
  publishedDate,
  seoUrl,
  seoTitle,
  twitterHandle,
  seoKeywords,
  body,
  options,
  content,
  seoDescription,
  id,
}) => (
  <div className="rgb max-w-3xl mx-auto xs:border-2 border-black rounded-md overflow-hidden">
    <div className="max-w-3xl mx-auto overflow-hidden -mb-3 relative z-10">
      <GatsbyImage
        image={featuredImage.gatsbyImageData}
        className="w-full"
        alt={seoTitle}
      />
    </div>
    <div className="z-20 relative text-center flex flex-col max-w-3xl bg-white mx-auto xl:px-20 lg:px-16 sm:px-6 pt-6">
      <h1 className="text-2xl mb-2 font-bold px-5">{title}</h1>
      <small>{publishedDate} | Mikkel Klokkerud</small>
      <Body body={body} options={options} content={content} />
      <div className="lg:hidden mx-auto transform -translate-y-6 text-center">
        <div className="w-full bg-black h-px mb-5 opacity-30" />
        <div className="transform scale-75 -translate-x-5 xs:scale-100 -translate-x-0">
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
  </div>
);

const SocialComponent = ({
  seoUrl,
  seoTitle,
  twitterHandle,
  seoKeywords,
  seoDescription,
  id,
}) => (
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
);

const ContactButton = () => (
  <Link
    to="/#contact"
    className="text-center mx-auto max-w-3xl block w-full xs:border-2 border-black rgb rounded-md bg-white p-4 shadow-xl hover:bg-black hover:text-white transition duration-100"
  >
    <div className="font-bold text-xl">Contact Me</div>{" "}
    <div className="text-sm">I normally respond in 24h</div>
  </Link>
);

const BlogWrapper = ({ children }) => (
  <div className="lg:grid mx-auto grid-cols-blog">{children}</div>
);

const ReadAlso = ({ posts }) => (
  <div className="mt-8 pb-8">
    <div className="mx-auto max-w-3xl grid sm:grid-cols-3 grid-cols-1 gap-y-3 gap-x-4">
      {posts &&
        posts.slice(0, 3).map(el => (
          <Link
            to={`/blog/${el.node.slug}`}
            className="xs:border-2 border-black rgb rounded-md bg-white p-4 shadow-xl hover:bg-black hover:text-white transition duration-100"
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
);

const BlogHeader = ({ image }) => (
  <div
    className="block image flex items-center max-w-3xl justify-center mx-auto"
    style={{ height: "12vh" }}
  >
    <Link to="/">
      <div>
        <Image fixed={image} alt="logo" className="mb-0 pb-0" />
      </div>
      <div className="text-sm text-center -mt-2 font-thin">
        Gatsby.js + Headless CMS
      </div>
    </Link>
  </div>
);

const Body = ({ body, options, content }) => (
  <div className="text-left mx-auto lg:mb-12 mb-10 mt-8">
    <div className={`${styles.content}`}>
      {renderRichText(body, options)}
      <div
        dangerouslySetInnerHTML={{
          __html: content?.childMarkdownRemark?.html || "",
        }}
      />
    </div>
  </div>
);

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
