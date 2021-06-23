import React from "react"
import { graphql } from "gatsby"
//import DynamicComponent from "../components/DynamicComponent"
import Layout from "../components/Layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents} = markdownRemark
  //let toc = tableOfContents.replaceAll("ul", "ul style='list-style-type: none;margin: 0;padding: 0;'");
  let toc = tableOfContents.replace(/<ul/g, "<ul style='list-style-type: none;margin: 0;padding: 0;'");
  return (
    <Layout location={frontmatter.slug}>

      <style dangerouslySetInnerHTML={{__html: `
        ul {all: revert; font-size: 19px}
        li {all: revert; font-size: 19px}
        p {all: revert; font-size: 22px}
        h2 { margin-top: 30px; text-decoration: underline; width: 100%}
        h3 { margin-top: 20px; margin-bottom: 30px}
        a { color: hotpink; }
        #myBtn {
          display: none;
          position: fixed;
          bottom: 20px;
          right: 30px;
          z-index: 99;
          font-size: 18px;
          border: none;
          outline: none;
          background-color: #d3387c;
          color: white;
          cursor: pointer;
          padding: 15px;
          border-radius: 4px;
        }

        #myBtn:hover {
          background-color: #555;
        }
      `}}/>
      <a class="btn btn-primary display-4" href="#top" id="myBtn">⇧ Back To Top ⇧</a>
      <div class="container" id="top">
        <div class="row">
          <div class="col">
          <br/><br/><br/>
            <div className="md-post">
              <h1><center>{frontmatter.title}</center></h1>
              <div class="row">
                <div class="col-4">
                <h3>Table of Contents</h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: toc }}
                  />
                </div>
                <div class="col-8">
                  <div
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>
              </div>
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
      tableOfContents(
          maxDepth: 2
        )
    }
  }
`
