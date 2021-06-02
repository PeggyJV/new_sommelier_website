/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, title, image, content }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            baseUrl
          }
        }
      }
    `
  );

  const defaults = site.siteMetadata;

  console.log("THE CONTENT");
  console.log(content);
  console.log("THE CONTENT");

  if (defaults.baseUrl === '' && typeof window !== 'undefined') {
    defaults.baseUrl = window.location.origin;
  }

  if (defaults.baseUrl === '') {
    console.error('Please set a baseUrl in your site metadata!');
    return null;
  }

  const metaDescription = content ? content.intro : (description || defaults.description);
  const defaultTitle = defaults?.title;
  const url = new URL('' || '', defaults.baseUrl);

  let metaImage = content ? content.image : null;
  // if (image) {
  //   const imageBaseUrl = 'http://a.storyblok.com'
  //   const imagePath = image.replace('//a.storyblok.com', '')
  //   metaImage = new URL(imagePath, imageBaseUrl);
  // }
  const author = defaults.author;

  //console.log('---seo---', metaImage);

  let pageTitle = content ? content.title : title

  return (
    <Helmet title={pageTitle} titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}>
      <meta name="description" content={metaDescription} />
      {metaImage && <meta name="image" content={metaImage} />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      {metaImage && <meta property="og:image" content={metaImage} />}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {metaImage && <meta name="twitter:image" content={metaImage} />}
    </Helmet>
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
