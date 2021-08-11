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

        /*
        let date_data = event.start_date.split(" ")
        let date_str = date_data[0]
        start_time = date_data[1]

        let utc_str = date_str + "T" + start_time + ":00.000+0000"

        s_date = new Date(utc_str);

        start_date = s_date.toLocaleDateString(undefined, options);
        */

        const entries = result.data.stories.edges
        entries.forEach((entry) => {
          const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

          let event = JSON.parse(entry.node.content);
          //let s_date = new Date(event.start_date.split(" ")[0]);
          let uid = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 50);
          //s_date.setDate(s_date.getDate());
          let date_data = event.start_date.split(" ")
          let date_str = date_data[0]
          let start_time = date_data[1]

          let utc_str = date_str + "T" + start_time + ":00.000+0000"

          let s_date = new Date(utc_str);

          let start_date = s_date.toLocaleDateString(undefined, options);
          console.log("start",s_date,  s_date.getTime());
          entry.node['uid'] = uid;
          entry.node['countDownDate'] = s_date.getTime();

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
