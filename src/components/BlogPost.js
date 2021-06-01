import React, {useEffect, useState} from 'react'
import SbEditable from "storyblok-react"
import { render, NODE_IMAGE } from "storyblok-rich-text-react-renderer"
import {isMobileOnly} from 'react-device-detect'
import { navigate } from 'gatsby-link';

const windowGlobal = typeof window !== 'undefined' && window

setTimeout(function(){
  var href = window.location.href;
  const facebook_url = 'https://www.facebook.com/sharer/sharer.php?u=' + href;
  const linkedin_url = 'https://www.linkedin.com/shareArticle?mini=true&url=' + href;
  const twitter_url = 'http://twitter.com/share?url='+ href;

  const fb = document.getElementById('facebook')


  if (fb) {
    document.getElementById('facebook').setAttribute("href", facebook_url);
    document.getElementById('linkedin').setAttribute("href", linkedin_url);
    document.getElementById('twitter').setAttribute("href", twitter_url);
  }
}, 1500);

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = windowGlobal;
  return {
    width,
    height
  };
}

let morePosts = []

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

  setTimeout(function(){
    var href = window.location.href;
    const facebook_url = 'https://www.facebook.com/sharer/sharer.php?u=' + href;
    const linkedin_url = 'https://www.linkedin.com/shareArticle?mini=true&url=' + href;
    const twitter_url = 'http://twitter.com/share?url='+ href;

    const fb = document.getElementById('facebook')


    if (fb) {
      document.getElementById('facebook').setAttribute("href", facebook_url);
      document.getElementById('linkedin').setAttribute("href", linkedin_url);
      document.getElementById('twitter').setAttribute("href", twitter_url);
    }
  }, 1500);


  morePosts = blok.allPosts ? blok.allPosts.filter(post => post.content.featured == false) : [];

  if(Array.isArray(morePosts) && morePosts.length) {
    morePosts.sort(function(a, b){return parseInt(a.content.created_at.split(" ")[0].replace(/-/g, '')) - parseInt(b.content.created_at.split(" ")[0].replace(/-/g, ''))});
  }

  console.log('*****');
  const text = 'Check this article out.';

  return (

    <SbEditable content={blok} key={blok._uid}>
      <div className='blog-container mt-5 mb-5'>
        <div className='container__featured-section'>
          <div className='container__featured-section__top'>
            <div className='social-container'>
              <a href='notset' target="_blank" id='twitter'><img src='/images/ico-blog-tw.png' alt='Facebook' width='24' /></a>
              <a href='notset' target="_blank" id='facebook'><img src='/images/ico-blog-fb.png' alt='Twitter' width='24' /></a>
              <a href='notset' target="_blank" id='linkedin'><img src='/images/ico-blog-li.png' alt='Linked In' width='24' /></a>
            </div>
            <div className='container__featured-section__top__post'>
              <div className='post-container'>
                <h1>{blok.title}</h1>
                <p>{blok.intro}</p>
                <img className="" src={blok.image} />
                <div className='post-container__content'>
                  {render(blok.long_text, {
                    nodeResolvers: {
                      [NODE_IMAGE]: (children, props) => <img {...props} style={{borderRadius: '0px', width: '100%'}}/>
                    },
                    blokResolvers: {
                      ['YouTube-blogpost']: (props) => (
                        <div class="embed-responsive embed-responsive-16by9">
                          <iframe class="embed-responsive-item" src={ "https://www.youtube.com/embed/" + props.YouTube_id.replace('https://youtu.be/', '')  }></iframe>
                        </div>
                        )
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {(morePosts.length > 0) && (
        <div className='container__more-section'>
          <p>MORE ARTICLES</p>
          <div className='container__more-section__content row'>

              {morePosts.reverse().map((post, index) => {
                return (
                  <div className='col-12  col-md-4' style={{ border:  '0px', padding: '0px', margin: '0px'}}>
                  <ul style={{width: '100%', border:  '0px', padding: '0px', margin: '0px'}}>
                  <li key={post.name} style={{width:  '100%', border:  '0px', padding: '0px', margin: '0px'}}>
                    <div className='more-li__content'>
                      <a className='container__more-section__title' href='#' onClick={(e) => {
                        e.preventDefault()
                        navigate(`/${post.full_slug}`)
                      }}>
                        <img src={post.content.image}></img>
                        <div className='mt-2'>
                          {post.content.title}
                        </div>
                      </a>
                    </div>
                  </li>
                  </ul>
                  </div>
                )
              })}

          </div>
        </div>
      )}
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
