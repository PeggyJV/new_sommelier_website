/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
       alias: {
          path: require.resolve("util"),
          https: require.resolve("https-browserify"),
          http: require.resolve("stream-http")
       },
       fallback: {
         fs: false,
       }
    }
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // return new Promise((resolve, reject) => {
  //   const storyblokEntry = path.resolve('src/templates/blog-entry.js')

  // })


  return new Promise((resolve, reject) => {
    const mdTemplate = require.resolve(`./src/templates/mdTemplate.js`)
    const storyblokEntry = path.resolve('src/templates/blog-entry.js')
    const jobsEntry = path.resolve('src/templates/job-entry.js')
    const eventEntry = path.resolve('src/templates/event-entry.js')

    resolve(graphql(
      `{
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }`).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.slug,
            component: mdTemplate,
            context: {
              // additional data can be passed via context
              slug: node.frontmatter.slug,
            },
          })
        })
      })
    )


    resolve(
      graphql(
        `{
          stories: allStoryblokEntry(filter: {field_component: {eq: "blogpost"}}) {
            edges {
              node {
                id
                name
                slug
                field_component
                full_slug
                content
              }
            }
          }
        }`
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const entries = result.data.stories.edges
        entries.forEach((entry) => {

          if(entry.node.full_slug == 'jobs/jobs') {
            const page = {
              path: `/jobs`,
              component: jobsEntry,
              context: {
                story: entry.node
              }
            }
            createPage(page)
          }

          if(entry.node.full_slug.includes('blog/')) {
            const page = {
              path: `/${entry.node.full_slug}`,
              component: storyblokEntry,
              context: {
                story: entry.node
              }
            }
            createPage(page);
          }

        })
      })
    )



    resolve(
      graphql(
        `{
          stories: allStoryblokEntry(filter: {field_component: {eq: "event"}}) {
            edges {
              node {
                id
                name
                slug
                field_component
                full_slug
                content
              }
            }
          }
        }`
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const entries = result.data.stories.edges
        entries.forEach((entry) => {
          if(entry.node.full_slug.includes('events/')) {
            const page = {
              path:  `/${entry.node.full_slug}`,
              component: eventEntry,
              context: {
                story: entry.node

              }
            }
            createPage(page)
          }
        })
      })
    )

  })

}
