import React from "react"
import PropTypes from "prop-types"

let twitter = "!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');twq('init','o65mg');twq('track','PageView');";
let mtm = "var _mtm = window._mtm = window._mtm || [];_mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];g.type='text/javascript'; g.async=true; g.src='https://cdn.matomo.cloud/leanmarketing.matomo.cloud/container_zuHO1C32.js'; s.parentNode.insertBefore(g,s);";


let mixpnl = `function getQueryParam(url, param) { param = param.replace(/[[]/, "\[").replace(/[]]/, "\]"); var regexS = "[\?&]" + param + "=([^&#]*)", regex = new RegExp( regexS ), results = regex.exec(url); if (results === null || (results && typeof(results[1]) !== 'string' && results[1].length)) { return ''; } else { return decodeURIComponent(results[1]).replace(/\W/gi, ' '); } }; function campaignParams() {var campaign_keywords = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' '), kw = '', params = {}, first_params = {}; var index; for (index = 0; index < campaign_keywords.length; ++index) { kw = getQueryParam(document.URL, campaign_keywords[index]); if (kw.length) { params[campaign_keywords[index] + ' [last touch]'] = kw; } } for (index = 0; index < campaign_keywords.length; ++index) { kw = getQueryParam(document.URL, campaign_keywords[index]); if (kw.length) { first_params[campaign_keywords[index] + ' [first touch]'] = kw; } } mixpanel.people.set(params); mixpanel.people.set_once(first_params); mixpanel.register(params); mixpanel.people.set({ 'last touch':  location.href });mixpanel.people.set_once({ 'first touch':  location.href });mixpanel.people.increment('page_views');mixpanel.track('page_load', { current_url: location.href, $current_url: location.href }); mixpanel.identify; } campaignParams();`

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script type="text/javascript" src="https://addevent.com/libs/atc/1.6.1/atc.min.js" async defer></script>
        <script type="text/javascript" src="/mp.js" ></script>
        <script
          dangerouslySetInnerHTML={{ __html: mtm }}
        />
        <script
          dangerouslySetInnerHTML={{ __html: twitter }}
        />
        <script
          dangerouslySetInnerHTML={{ __html: mixpnl }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
