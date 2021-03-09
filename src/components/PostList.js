import React, {useEffect, useState} from 'react'
import SbEditable from 'storyblok-react'
import {isMobileOnly} from 'react-device-detect'

const windowGlobal = typeof window !== 'undefined' && window

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = windowGlobal;
  return {
    width,
    height
  };
}

const PostsList = ({ blok }) => {
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    windowGlobal.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );


  const featuredPosts = blok.posts.filter(post => post.content.featured == true)
  const morePosts = blok.posts.filter(post => post.content.featured == false)
  const moreWidth = windowDimensions.width * morePosts.length

  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className='blog-container mt-5 mb-5'>
        <div className='container__featured-section'>
          <ul>
            {featuredPosts.map((post, index) => {
              if (index === 0) {
                return (
                  <li key={post.full_slug} className='top-post'>
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
                return (
                  <li key={post.full_slug} className='featured-post'>
                    <div className='featured-post__content'>
                      <img src={post.content.image}></img>
                      <div className='featured-post__text'>
                        <a className='container__featured-section__title' href={`/${post.full_slug}`}>
                          {post.content.title}
                        </a>
                        <p className='container__featured-section__intro mt-3'>{post.content.intro}</p>
                      </div>
                    </div>
                    {index < featuredPosts.length-1 && (
                      <div className='bottom-border-line'></div>
                    )}
                  </li>
                )
              }
            })}
          </ul>
        </div>
        <div className='container__more-section'>
          <p>MORE ARTICLES</p>
          <div className='container__more-section__content'>
            <ul style={{width: isMobileOnly ? moreWidth : '100%'}}>
              {morePosts.map((post, index) => {
                return (
                  <li key={post.name} style={{width: isMobileOnly ? windowDimensions.width : '33%'}}>
                    <div className='more-li__content'>
                      <img src={post.content.image}></img>
                      <div className='mt-2'>
                        <a className='container__more-section__title' href={`/${post.full_slug}`}>
                          {post.content.title}
                        </a>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </SbEditable>
  )
}
export default PostsList
