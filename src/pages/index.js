import React from "react"
import Layout from "../components/Layout"
import Main from "../components/Main"
import { graphql } from 'gatsby'
import StoryblokService from '../utils/storyblok-service'
import SEO from "../components/seo"

export default class extends React.Component {
  state = {
    story: {
      content: this.props.data.story ? JSON.parse(this.props.data.story.content) : {}
    }
  }

  async getInitialStory() {
    StoryblokService.setQuery(this.props.location.search)
    let { data: { story } } = await StoryblokService.get(`cdn/stories/${this.props.data.story.full_slug}`)
    return story
  }

  async componentDidMount() {
    let story = await this.getInitialStory()
    if(story.content) this.setState({ story })
    setTimeout(() => StoryblokService.initEditor(this), 200)
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Sommelier" description="Sommelier is the new Coprocessor for the Ethereum VM"/>
        <Main />
        {/* <BlogPost blok={this.state.story.content} /> */}
      </Layout>
    )
  }
}

export const query = graphql`
  {
    story: storyblokEntry(full_slug: { eq: "home" }) {
      name
      content
      full_slug
      uuid
    }
  }
`
