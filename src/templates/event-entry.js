
import React from "react"
import EventPage from '../components/EventPage'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import { Router } from '@reach/router'
import StoryblokService from '../utils/storyblok-service'
import SEO from "../components/HeadSeo"

import "../assets/scss/blog.scss"
import "../assets/scss/main.scss"

export default class extends React.Component {
  constructor(props) {
    super(props);
    let content =  []

    content.push(props.pageContext.story);
    // props.data.stories.edges.forEach((story) => {
    //   console.log(story.node.full_slug);
    //   if(story.node.full_slug.includes('events/')) {
    //     content.push(story.node);
    //   }
    // });
    //
    this.state = {
      events: { content }
    };
  }


  render() {
    console.log("SDLKJFNKSDJNF");
    console.log(this.state);
    return (
      <Layout location={this.props.location}>
        <SEO title="Events" description="Sommelier upcoming events."/>

          <EventPage blok={this.state} title='Upcoming Events' history={false}  join_community={true} />

      </Layout>
    )
  }
}
