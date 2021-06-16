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

//   let mixpanel = Mixpanel.init('d6a6208c71b46a6965913df792f505f9');
//
//
//   function getQueryParam(url, param) {
//     // Expects a raw URL
//     param = param.replace(/[[]/, "\[").replace(/[]]/, "\]");
//     var regexS = "[\?&]" + param + "=([^&#]*)",
//     regex = new RegExp( regexS ),
//     results = regex.exec(url);
//     if (results === null || (results && typeof(results[1]) !== 'string' && results[1].length)) {
//       return '';
//     } else {
//       return decodeURIComponent(results[1]).replace(/\W/gi, ' ');
//     }
//   };
//   function campaignParams() {
//     var campaign_keywords = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' ')
//     , kw = ''
//     , params = {}
//     , first_params = {};
//     var index;
//     for (index = 0; index < campaign_keywords.length; ++index) {
//       kw = getQueryParam(document.URL, campaign_keywords[index]);
//       if (kw.length) {
//         params[campaign_keywords[index] + ' [last touch]'] = kw;
//       }
//     }
//     for (index = 0; index < campaign_keywords.length; ++index) {
//       kw = getQueryParam(document.URL, campaign_keywords[index]);
//       if (kw.length) {
//         first_params[campaign_keywords[index] + ' [first touch]'] = kw;
//       }
//     }
//     mixpanel.people.set(params);
//     mixpanel.people.set_once(first_params);
//     //mixpanel.register(params);
//   }
//
// console.log(location);
//   mixpanel.people.set({ 'last touch':  location.href });
//   mixpanel.people.set_once({ 'first touch':  location.href });
//   mixpanel.people.increment('page_views');
//
//   campaignParams();
//
//
//   mixpanel.people.set({ 'last touch':  location.href });
//   mixpanel.people.set_once({ 'first touch':  location.href });
//   mixpanel.people.increment('page_views');
//   mixpanel.track('page_load', { current_url: location.href });

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
