
import React from "react"
import EventPage from '../../components/EventPage'
import Layout from "../../components/Layout"
import { graphql } from 'gatsby'
import { Router } from '@reach/router'
import StoryblokService from '../../utils/storyblok-service'
import SEO from "../../components/HeadSeo"

import "../../assets/scss/blog.scss"
import "../../assets/scss/main.scss"

export default class extends React.Component {
  constructor(props) {
    super(props);
    let content =  []

    props.data.stories.edges.forEach((story) => {
      const event = JSON.parse(story.node.content);

      let uid = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 50);

      if(story.node.full_slug.includes('events/')) {
        let s_date = new Date(event.start_date.split(" ")[0]);
        let today = new Date();

        s_date = new Date(s_date.toLocaleString(undefined));

        if (s_date < today) {
          story.node['uid'] = uid;

          let n_date = new Date(s_date.toLocaleString);
          
          story.node['countDownDate'] = s_date.getTime();

          content.push(story.node);
        }
      }
    });


    this.state = {
      events: { content }
    };
  }

  render() {
    //console.log(this.state);
    return (
      <Layout location={this.props.location}>
        <SEO title="Events" description="Sommelier upcoming events."/>
        <Router>
          {<EventPage blok={this.state} title='Past Events' history={true} path='/events/history' />}
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
