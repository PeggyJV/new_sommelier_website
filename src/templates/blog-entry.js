import React from "react"
import DynamicComponent from "../components/DynamicComponent"
import Layout from "../components/layout"
import StoryblokService from '../utils/storyblok-service'
export default class extends React.Component {
  state = {
    story: {
      content: this.props.pageContext.story ? JSON.parse(this.props.pageContext.story.content) : {}
    }
  }
  async getInitialStory() {
    let { data: { story } } = await StoryblokService.get(`cdn/stories/${this.props.pageContext.story.full_slug}`)
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
        <DynamicComponent blok={this.state.story.content} key={this.props.pageContext.story._uid} />
      </Layout>
    )
  }
}