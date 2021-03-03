import React from 'react'
import Teaser from './Teaser'
// import Feature from './Feature'
// import Grid from './Grid'
import Placeholder from './Placeholder'
import PostsList from './PostList'
import BlogPost from './Blogpost'

const Components = {
  'teaser': Teaser,
  'blogpost': BlogPost,
  'posts-list': PostsList
}

const Component = ({blok}) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  return blok.component ? <Placeholder componentName={blok.component}/> : null
}

export default Component
