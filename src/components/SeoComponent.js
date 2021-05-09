import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const SeoComponent = ({
  description,
  lang,
  meta,
  title,
  keywords,
  image,
  author,
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
  )

  const metaDescription = description || site.siteMetadata.description
  const metaAuthor = author || site.siteMetadata.author
  return (
    <div />
    // <Helmet
    //   htmlAttributes={{
    //     lang,
    //   }}
    //   title={title}
    //   link={[
    //     {
    //       rel: "image",
    //       href: `https:${image}`,
    //     },
    //     {
    //       rel: "canonical",
    //       href: `https://mikkelcodes.com`,
    //     },
    //     {
    //       rel: "alternate",
    //       href: `https://mikkelcodes.com`,
    //       hreflang: "en",
    //     },
    //   ]}
    //   titleTemplate={`%s | ${site.siteMetadata.title}`}
    //   meta={[
    //     {
    //       name: `description`,
    //       content: metaDescription,
    //     },
    //     {
    //       property: `og:title`,
    //       content: title,
    //     },
    //     {
    //       property: `og:description`,
    //       content: metaDescription,
    //     },
    //     {
    //       property: `og:image`,
    //       content: `https:${image}`,
    //     },
    //     {
    //       property: `og:type`,
    //       content: `website`,
    //     },
    //     {
    //       name: `keywords`,
    //       content: keywords,
    //     },
    //     {
    //       name: "author",
    //       content: metaAuthor,
    //     },
    //   ].concat(meta)}
    // />
  )
}
