module.exports = {
  siteMetadata: {
    title: `Sommelier: The New CoProcessor for Ethereum`,
    description: `Sommelier is a bet that Ethereum will be a dominant player in the global economy.`,
    author: `@sommfinance`,
    baseUrl: ``, // used to create absolute URLs for
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'Hx9jd3xuH0cARCTgIBio2Qtt',
        homeSlug: 'home',
        version: 'published',
        mixpanel: 'd6a6208c71b46a6965913df792f505f9'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
        icon: `static/images/etherium.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/blog/*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
