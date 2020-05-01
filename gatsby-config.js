require("dotenv").config({

  path: `.env.${process.env.NODE_ENV}`,
  
  })

module.exports = {
  siteMetadata: {
    title: `MikkelCodes`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
        resolve: "gatsby-source-contentful",
        options: {
          spaceId: "5mq881xgkjc9",
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
        name: "src"
      }
    },

    "gatsby-transformer-remark",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
