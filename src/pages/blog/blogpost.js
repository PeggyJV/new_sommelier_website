import React, {useState, useEffect, useCallback} from 'react'

import Layout from "../../components/Layout"
import BlogPost from "../../components/BlogPost"
import StoryblokService from '../../utils/storyblok-service'
import SEO from "../../components/HeadSeo"

const BlogPostContainer = ({location}) => {
  const [story, setStory] = useState(null)

  const getAllPosts = async () => {
    let { data: { story } } = await StoryblokService.get(`cdn/stories/blog`,{
        "resolve_relations": "posts-list.posts",
        "version": "published"
      })
    return story
  }

  useEffect(() => {
    async function fetchData() {
      console.log('---location--', location.search)
      let fullSlug = location.search.substring(1)
      var lastChar = fullSlug[fullSlug.length -1]
      if (lastChar === '=') {
        fullSlug = fullSlug.slice(0, -1)
      }

      let { data: { story } } = await StoryblokService.get(`cdn/stories/${fullSlug}`)
      let allPosts = await getAllPosts()
      if(allPosts.content) {
        const blogContent =
          allPosts.content.body &&
          allPosts.content.body.map(childBlok => childBlok.component === 'posts-list' && childBlok.posts)
        // This is to be figured out later
        story.content['allPosts'] = blogContent[0]
      }

      setStory(story)
    }
    fetchData()
  }, [location])

  return (
    <Layout location={location}>
      <SEO title={story ? story.content.title : "Sommelier"} description="Sommelier is the new Coprocessor for the Ethereum VM" image={story ? story.content.image : null}/>
      {story && <BlogPost blok={story.content}/>}
    </Layout>
  )
}
export default BlogPostContainer
