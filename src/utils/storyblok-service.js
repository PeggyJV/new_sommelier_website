import StoryblokClient from 'storyblok-js-client'
import config from '../../gatsby-config'
const sbConfig = config.plugins.find((item) => item.resolve === 'gatsby-source-storyblok')
var Mixpanel = require('mixpanel');


class StoryblokService {
  constructor() {
    this.mixpanel = Mixpanel.init(sbConfig.options.mixpanel);
    this.devMode = false
    this.token = sbConfig.options.accessToken
    this.client = new StoryblokClient({
      accessToken: this.token,
      cache: {
        clear: 'auto',
        type: 'memory'
      }
    })
    this.query = ''
  }

  getCacheVersion() {
    return this.client.cacheVersion
  }

  get(slug, params) {
    params = params || {}

    if (this.getQuery('_storyblok') || this.devMode || (typeof window !== 'undefined' && window.storyblok)) {
      params.version = 'published' //draft
    }


    this.mixpanel.track('storyblok:api_call', { slug: slug });


    if (this.client.cacheVersion) params.cv = this.client.cacheVersion
    return this.client.get(slug, params)
  }

  initEditor(reactComponent) {
    //this.client.flushCache()
    if (window.storyblok) {
      window.storyblok.init({
        accessToken: sbConfig.options.accessToken
      })

      window.storyblok.on(['change', 'published'], () => {
        this.client.flushCache()
        window.location.reload()
      })
      window.storyblok.on(['change', 'unpublished'], () => {
        this.client.flushCache()
        window.location.reload()
      })

      // this will alter the state and replaces the current story with a current raw story object
      window.storyblok.on('input', (event) => {
        if (event.story && event.story.content._uid === reactComponent.state.story.content._uid) {
          let commentContent = window.storyblok.addComments(event.story.content, event.story.id)
          window.storyblok.resolveRelations(event.story, ['featured-articles.articles'], () => {
            reactComponent.setState({
              story: {
                content: commentContent
              }
            })
          })
        }
      })
    }
  }

  setQuery(query) {
    this.query = query
  }

  getQuery(param) {
    return this.query.includes(param)
  }
}

const storyblokInstance = new StoryblokService()

export default storyblokInstance
