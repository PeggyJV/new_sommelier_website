import StoryblokClient from 'storyblok-js-client'
import config from '../../gatsby-config'
const sbConfig = config.plugins.find((item) => item.resolve === 'gatsby-source-storyblok')

class StoryblokService {
  constructor() {
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

    if (typeof window !== 'undefined' && typeof window.StoryblokCacheVersion !== 'undefined') {
      params.cv = window.StoryblokCacheVersion
    }
    console.log('---window get----', params)
    return this.client.get(slug, params)
  }

  initEditor(reactComponent) {
    this.client.flushCache()
    if (window.storyblok) {
      console.log('---window editor----', window.StoryblokCacheVersion)
      window.storyblok.init({
        accessToken: sbConfig.options.accessToken
      })
      // window.storyblok.pingEditor(() => {
      //   if (window.storyblok.isInEditor) {
      //     window.storyblok.enterEditmode()
      //   }
      // })
      window.storyblok.on(['change', 'published'], () => {
        console.log('---published---')
        this.client.flushCache()
        
        window.location.reload()
      })
      window.storyblok.on(['change', 'unpublished'], () => {
        console.log('---unpublished---')
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

  clearCache() {
    this.client.flushCache()
  }
}

const storyblokInstance = new StoryblokService()

export default storyblokInstance