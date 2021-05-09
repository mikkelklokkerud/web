require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `MikkelCodes`,
    description: `No more waiting with JAMstack apps. Learn how to create secure, dynamic and fast fast web apps with JAMstack technology.`,
    author: `Mikkel Klokkerud`,
    url: "https://mikkelcodes.com",
    image: "src/images/MikkelCodes.png",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
        name: "src",
      },
    },
    {
      resolve: "gatsby-background-image",
      options: {
        specialChars: "/:",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-163172180-1",
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: `https://mikkelcodes.us19.list-manage.com/subscribe/post?u=a6380a8628ee8997c2d6805c7&amp;id=f0c9f84372`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `mikkelcodes`,
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-postcss`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/favicon-64x64.png`,
    //     legacy: false,
    //   },
    // },
  ],
}
