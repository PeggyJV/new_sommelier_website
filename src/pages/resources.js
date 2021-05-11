
import React from "react"
import ResourcesPage from '../components/ResourcesPage'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import { Router } from '@reach/router'
import StoryblokService from '../utils/storyblok-service'
import SEO from "../components/Seo"

import "../assets/scss/blog.scss"
import "../assets/scss/main.scss"

export default class extends React.Component {
  constructor(props) {
    super(props);
    let content =  []

    props.data.stories.edges.forEach((story) => {
      if(story.node.full_slug.includes('resources/')) {
        content.push(story.node);
      }
    });

    this.state = {
      events: { content }
    };
  }

  render() {
    console.log(this.state);
    return (
      <Layout location={this.props.location}>
        <SEO title="Resources" description="Sommelier upcoming events."/>
        <Router>
          {<ResourcesPage blok={this.state} path='/resources' />}
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
