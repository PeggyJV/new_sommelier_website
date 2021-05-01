import React, {useEffect, useState} from 'react'
import SbEditable from 'storyblok-react'
import {isMobileOnly} from 'react-device-detect'
import { navigate } from 'gatsby-link';

const windowGlobal = typeof window !== 'undefined' && window


const PostsList = ({ blok }) => {
  console.log('POSTLIST');
  console.log(blok);
  console.log('POSTLIST');

  

  return (
    <SbEditable content={blok} key={blok._uid}>
    </SbEditable>
  )
}
export default PostsList
