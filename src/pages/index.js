import React from "react";
import { graphql } from "gatsby";
import { SeoComponent } from "../components/SeoComponent";
import Posts from "./../components/Posts";
import { LayoutComponent } from "../components/LayoutComponent";
import Services from "./../components/Services";
import DividerText from "./../components/DividerText";
import NetlifyForm from "./../components/NetlifyForm";
import Hero from "./../components/Hero";

const IndexPage = ({ data }) => {
  const allPosts = data.allContentfulBlogPost.edges;
  const featured = data.allContentfulBlogPost.edges.filter(
    edge => edge.node.featured
  );
  const { id, title, slug, publishedDate, shortDescription } = featured[0].node;
  const keywords = ["web developer", "developer", "React", "gatsby"];
  const featuredType = "Post";
  return (
    <>
      <LayoutComponent>
        <SeoComponent title="Blog" keywords={keywords} />
        <Hero
          key={id}
          title={title}
          slug={slug}
          image={data.file.childImageSharp.gatsbyImageData}
          publishedDate={publishedDate}
          shortDescription={shortDescription}
          featuredType={featuredType}
          page={"ARCHIVE"}
        />
        <DividerText />
        <Services />
        {/* <LatestArticles posts={allPosts} /> */}
        {/* <MailChimpForm /> */}
        <Posts posts={allPosts} title="Latest Articles" />
        <NetlifyForm />
      </LayoutComponent>
    </>
  );
};

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
        }
      }
    }
    file(name: { eq: "logo-white-bg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;

export default IndexPage;
