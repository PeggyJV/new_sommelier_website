import React from "react"
import Navigation from './Navigation'
import Footer from './Footer'
import { useStaticQuery, graphql } from "gatsby"
//const sbConfig = config.plugins.find((item) => item.resolve === 'gatsby-source-storyblok')

import StoryblokService from '../utils/storyblok-service'
var Mixpanel = require('mixpanel');

export default function Layout({ children, location, lang }){
  const { settings } = useStaticQuery(graphql`
  query Settings {
    settings: allStoryblokEntry(filter: {field_component: {eq: "settings"}}) {
      edges {
        node {
          name
          full_slug
          content
        }
      }
    }
  }
  `)
  let { pathname } = location
  //let language = pathname.split("/")[1].replace('/', '')
  //let activeLanguage = ['de', 'en'].includes(language) ? language : 'en'
  let activeLanguage = 'en'

  let correctSetting = settings.edges.filter(edge => edge.node.full_slug.indexOf('settings') > -1)
  let hasSetting = correctSetting && correctSetting.length ? correctSetting[0].node : {}
  let content = typeof hasSetting.content === 'string' ? JSON.parse(hasSetting.content) : hasSetting.content
  let parsedSetting = Object.assign({}, content, {content: content})
  let origin = "";

  if (typeof window !== 'undefined') {
    origin = window.location.origin;
  }

  let mixpanel = Mixpanel.init('d6a6208c71b46a6965913df792f505f9');
  mixpanel.track('page_load', { current_url: location.href });

  return (
    <div className="bg-gray-300">
      <Navigation settings={parsedSetting} lang={activeLanguage} pathname={pathname}/>
      <main>
      { children }
      </main>
      <Footer />
    </div>
  )
}
