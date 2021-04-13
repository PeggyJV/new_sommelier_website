import React from "react"
import { ConsoleView } from "react-device-detect"
import DynamicComponent from "../components/DynamicComponent"
import Layout from "../components/Layout"
import blog from "../pages/blog"
import StoryblokService from '../utils/storyblok-service'

export default class extends React.Component {
  state = {
    story: {
      content: this.props.pageContext.story ? JSON.parse(this.props.pageContext.story.content) : {}
    }
  }


  async getInitialStory() {
    let { data: { story } } = await StoryblokService.get(`cdn/stories/${this.props.pageContext.story.full_slug}`)
    // let allPosts = await this.getAllPosts()
    // if(allPosts.content) {
    //   const blogContent =
    //     allPosts.content.body &&
    //     allPosts.content.body.map(childBlok => childBlok.component === 'posts-list' && childBlok.posts)
    //   // This is to be figured out later
    //   story.content['allPosts'] = blogContent[0]
    // }

    return story
  }

  async componentDidMount() {
    let story = await this.getInitialStory()

    if(story.content) this.setState({ story })
    //setTimeout(() => StoryblokService.initEditor(this), 200)
  }
  render() {
    return (
      <Layout location={this.props.location}>
        <DynamicComponent blok={this.state.story.content} key={this.props.pageContext.story._uid} />
      </Layout>
    )
  }
}
