/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
//import { Helmet } from "react-helmet"
//import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, title, image, content }) {


  //const defaults = site.siteMetadata;

  console.log("THE CONTENT");
  console.log(content);
  console.log("THE CONTENT");

  const metaDescription = content ? content.intro : null;

  //const url = new URL('' || '', defaults.baseUrl);

  let metaImage = content ? content.image : null;
  metaImage = "http:" + metaImage;
  console.log(metaImage);
  console.log(metaDescription);

  // if (image) {
  //   const imageBaseUrl = 'http://a.storyblok.com'
  //   const imagePath = image.replace('//a.storyblok.com', '')
  //   metaImage = new URL(imagePath, imageBaseUrl);
  // }
  //const author = defaults.author;

  //console.log('---seo---', metaImage);

  let pageTitle = content ? content.title : null;
  console.log(pageTitle);

  return (
    <head>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />
    </head>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
