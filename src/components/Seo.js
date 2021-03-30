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

function SEO({ description, title, image }) {
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

  if (defaults.baseUrl === '' && typeof window !== 'undefined') {
    defaults.baseUrl = window.location.origin;
  }

  if (defaults.baseUrl === '') {
    console.error('Please set a baseUrl in your site metadata!');
    return null;
  }

  const metaDescription = description || defaults.description;
  const defaultTitle = defaults?.title;
  const url = new URL('' || '', defaults.baseUrl);
  let metaImage = null;
  if (image) {
    const imageBaseUrl = 'http://a.storyblok.com'
    const imagePath = image.replace('//a.storyblok.com', '')
    metaImage = new URL(imagePath, imageBaseUrl);
  }
  const author = defaults.author;

  console.log('---seo---', metaImage);

  return (
    <Helmet title={title} titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}>
      <meta name="description" content={metaDescription} />
      {metaImage && <meta name="image" content={metaImage} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
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
