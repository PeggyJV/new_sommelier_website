
import React from "react"
import EventPage from '../components/EventPage'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import { Router } from '@reach/router'
import StoryblokService from '../utils/storyblok-service'
import SEO from "../components/Seo"

import "../assets/scss/blog.scss"
import "../assets/scss/main.scss"

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
    let content =  []

    props.data.stories.edges.forEach((story) => {
      console.log(story.node.full_slug);
      if(story.node.full_slug.includes('events/')) {
        content.push(story.node);
      }
    });

    this.state = {
      events: { content }
    };
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Events" description="Sommelier upcoming events."/>
        <Router>
          {<EventPage blok={this.state} path='/events' />}
        </Router>
      </Layout>
    )
  }
}

export const query = graphql`
{
  stories: allStoryblokEntry {
    edges {
      node {
        id
        name
        created_at
        published_at
        uuid
        slug
        full_slug
        content
        is_startpage
        parent_id
        group_id
      }
    }
  }
}
`
