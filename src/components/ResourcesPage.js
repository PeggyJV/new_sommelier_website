import React, {useEffect, useState} from 'react'
import SbEditable from 'storyblok-react'
import {isMobileOnly} from 'react-device-detect'
import { navigate } from 'gatsby-link';
import Resource from './Resource'

const windowGlobal = typeof window !== 'undefined' && window


const ResourcesPage = ({ blok }) => {
  const events = blok.events.content;
  return (
    <SbEditable content={blok} key={blok._uid}>
      <br/><br/><br/>
      <div class="container">
      <h1>Resources</h1>

      <br/><br/>
        {
          events.reverse().map((blok, index) => {
            const event = JSON.parse(blok.content);

            return(<Resource blok={event} />)
          })
        }
        <br/>
      </div>
    </SbEditable>
  )
}
export default ResourcesPage
