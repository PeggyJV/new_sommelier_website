module.exports = {
  siteMetadata: {
    title: `Sommelier: The New CoProcessor for Ethereum`,
    description: `Sommelier is a bet that Ethereum will be a dominant player in the global economy.`,
    author: `@sommfinance`,
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
        version: 'published' // 'draft'
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
