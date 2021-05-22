import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export const SeoComponent = ({
  meta,
  seoUrl,
  seoImage,
  seoTitle,
  seoKeywords,
  seoDescription,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            url
          }
        }
      }
    `
  );

  const metaAuthor = "Mikkel Klokkerud";
  const metaUrl = seoUrl || site.siteMetadata.url;
  const metaImage = seoImage.fluid.src || site.siteMetadata.image;
  const metaTitle = seoTitle || site.siteMetadata.title;
  const metaDescription = seoDescription || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={metaTitle}
      link={[
        {
          rel: "image",
          href: `https:${metaImage}`,
        },
        {
          rel: "canonical",
          href: `https://mikkelcodes.com`,
        },
        {
          rel: "alternate",
          href: `https://mikkelcodes.com`,
          hreflang: "en",
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `https:${metaImage}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `keywords`,
          content: seoKeywords,
        },
        {
          name: "author",
          content: metaAuthor,
        },
      ].concat(meta)}
    >
      <meta name="og:description" content={metaDescription} />
      <meta name="description" content={metaDescription} />
      {metaTitle && <meta property="og:title" content={metaTitle} />}
      {(metaTitle ? true : null) && (
        <meta property="og:type" content="article" />
      )}
      {metaUrl && <meta property="og:url" content={metaUrl} />}
      <meta name="image" content={metaImage} />
    </Helmet>
  );
};
