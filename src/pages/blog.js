import React from "react"
import Page from '../components/Page'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import { Router } from '@reach/router'
import StoryblokService from '../utils/storyblok-service'
import SEO from "../components/Seo"

import "../assets/scss/blog.scss"

setTimeout(function(){
  var href = window.location.href;
  const facebook_url = 'https://www.facebook.com/sharer/sharer.php?u=' + href;
  const linkedin_url = 'https://www.linkedin.com/shareArticle?mini=true&url=' + href;
  const twitter_url = 'http://twitter.com/share?url='+ href;

  const fb = document.getElementById('facebook')


  if (fb) {
    document.getElementById('facebook').setAttribute("href", facebook_url);
    document.getElementById('linkedin').setAttribute("href", linkedin_url);
    document.getElementById('twitter').setAttribute("href", twitter_url);
  }
}, 1500);

export default class extends React.Component {
  constructor(props) {
    super(props);

    let content =  this.props.data.story ? JSON.parse(this.props.data.story.content) : {}
    // we need to join the story posts with the full posts information
    let posts = this.props.data.posts.edges.map(n => n.node)
    let postList = content.body.find(c => c.component === 'posts-list')
    if(postList) {
        let index = content.body.indexOf(postList)
        let joinedPosts = postList.posts.map(uuid => {
            let fullPost = posts.find(p => p.uuid === uuid)
            let content = fullPost ? JSON.parse(fullPost.content) : ""
            return Object.assign({}, fullPost, { content })
        })
        content.body[index].posts = joinedPosts
    }

    this.state = {
      story: { content }
    };
  }

  async getInitialStory() {
    let { data: { story } } = await StoryblokService.get(`cdn/stories/${this.props.data.story.full_slug}`, {
        "resolve_relations": "posts-list.posts",
        "version": "published"
      })
    return story
  }

  async componentDidMount() {
    // await StoryblokService.clearCache()
    let story = await this.getInitialStory()
    if(story.content) {
      setTimeout(() => this.setState({ story }), 200)
    }
    setTimeout(() => StoryblokService.initEditor(this), 200)
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Sommelier" description="Sommelier is the new Coprocessor for the Ethereum VM"/>
        <Router>
          {this.state.story && <Page blok={this.state.story.content} path='/blog' />}
        </Router>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    story: storyblokEntry(full_slug: { eq: "blog/" }) {
      name
      content
      full_slug
      uuid
    }
    posts: allStoryblokEntry(filter: {full_slug: {regex: "/blog/(.)+/"}}) {
      edges {
        node {
          full_slug
          uuid
          name
          content
        }
      }
    }
  }
`
