import React from "react"
import Layout from "../components/Layout"
import Main from "../components/Main"
import { graphql } from 'gatsby'
import StoryblokService from '../utils/storyblok-service'


setTimeout(function(){
  console.log("jason 2")
  var href = window.location.href;
  const facebook_url = 'https://www.facebook.com/sharer/sharer.php?u=' + href;
  const linkedin_url = 'https://www.linkedin.com/shareArticle?mini=true&url=' + href;
  const twitter_url = 'http://twitter.com/share?url='+ href;

  document.getElementById('facebook').setAttribute("href", facebook_url);
  document.getElementById('linkedin').setAttribute("href", linkedin_url);
  document.getElementById('twitter').setAttribute("href", twitter_url);
}, 2000);


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
