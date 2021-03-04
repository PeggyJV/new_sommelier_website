import React from 'react'
import SbEditable from 'storyblok-react'

const PostsList = ({ blok }) => {
  console.log('--postslist data---', blok.posts)
  const featuredPosts = blok.posts.filter(post => post.content.featured == true)
  const morePosts = blok.posts.filter(post => post.content.featured == false)

  console.log('---featured---', featuredPosts)
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className='container section-container mt-5'>
        <div className='container__featured-section'>
          <ul>
            {blok.posts.map((post, index) => {
              if (index === 0) {
                return (
                  <li key={post.name} className='top-post'>
                    <img src={post.content.image}></img>
                    <div className='mt-5'>
                      <a className='container__featured-section__title' href={`/${post.full_slug}`}>
                        {post.content.title}
                      </a>
                      <p className='container__featured-section__intro mt-3'>{post.content.intro}</p>
                    </div>
                  </li>
                )
              } else {

              }
            })}
          </ul>
        </div>
      </div>
    </SbEditable>
  )
}
export default PostsList
