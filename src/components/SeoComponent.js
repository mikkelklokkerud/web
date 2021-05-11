import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export const SeoComponent = ({
  description,
  meta,
  title,
  keywords,
  image,
  url,
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

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image || site.siteMetadata.image;
  const metaAuthor = "Mikkel Klokkerud";
  const metaTitle = title || site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      link={[
        {
          rel: "image",
          href: `https:${image}`,
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
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `https:${image}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `keywords`,
          content: keywords,
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
      {(title ? true : null) && <meta property="og:type" content="article" />}
      {url && <meta property="og:url" content={url} />}
      <meta name="image" content={metaImage} />
    </Helmet>
  );
};
