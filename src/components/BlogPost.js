import React, {useEffect, useState} from 'react'
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import {isMobileOnly} from 'react-device-detect'
import { globalHistory as history } from '@reach/router'
import { useLocation } from "@reach/router"

const windowGlobal = typeof window !== 'undefined' && window

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = windowGlobal;
  return {
    width,
    height
  };
}

const BlogPost = ({ blok }) => {
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


  const location = useLocation();

  const morePosts = blok.allPosts ? blok.allPosts.filter(post => post.content.featured == false) : [];
  const moreWidth = morePosts ? windowDimensions.width * morePosts.length : 0;
  const current_url = location.href
  const text = 'Check this article out.';
  const twitter_url = 'http://twitter.com/share?text=' + text + '&url=' + current_url
  const facebook_url = 'https://www.facebook.com/sharer/sharer.php?u=' + current_url
  const linkedin_url = 'https://www.linkedin.com/shareArticle?mini=true&url=' + current_url

  console.log(blok);
  console.log(location);


  return (

    <SbEditable content={blok} key={blok._uid}>
      <div className='blog-container mt-5 mb-5'>
        <div className='container__featured-section'>
          <div className='container__featured-section__top'>
            <div className='social-container'>
              <a href={twitter_url} target="_blank"><img src='/images/ico-blog-fb.png' alt='Facebook' width='24' /></a>
              <a href={facebook_url} target="_blank"><img src='/images/ico-blog-tw.png' alt='Twitter' width='24' /></a>
              <a href={linkedin_url} target="_blank"><img src='/images/ico-blog-li.png' alt='Linked In' width='24' /></a>
            </div>
            <div className='container__featured-section__top__post'>
              <div className='post-container'>
                <h1>{blok.title}</h1>
                <p>{blok.intro}</p>
                <img className="" src={blok.image} />
                <div className='post-container__content'>
                  {render(blok.long_text)}
                </div>
              </div>
            </div>
          </div>
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
      {/* <div className="bg-white w-full">
        <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
          <h1 className="text-5xl font-bold font-serif text-purple-700 tracking-wide">
            {blok.title}
          </h1>
          <p className="text-gray-500 text-lg max-w-lg">{blok.intro}</p>
          <img className="w-full bg-gray-300 my-16" src={blok.image} />
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
        <div className="leading-relaxed text-xl text-left text-gray-800 drop-cap">
          {render(blok.long_text)}
        </div>
        <div className="py-16 max-w-sm p-2 sm:p-10 text-center flex flex-col">
          <div className="p-4 bg-purple-700 rounded-full mx-auto">
          </div>
        </div>
      </div> */}
    </SbEditable>
  )
}
export default BlogPost
