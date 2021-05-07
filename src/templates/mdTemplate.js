import React from "react"
import { graphql } from "gatsby"
//import DynamicComponent from "../components/DynamicComponent"
import Layout from "../components/Layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout location={frontmatter.slug}>
      <div class="container">
        <div class="row">
          <div class="col">
          <br/><br/><br/>
            <div className="md-post">
              <h1><center>{frontmatter.title}</center></h1>
              <div
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <br/><br/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
