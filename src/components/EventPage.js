import React, {useEffect, useState} from 'react'
import SbEditable from 'storyblok-react'
import {isMobileOnly} from 'react-device-detect'
import { navigate } from 'gatsby-link';
import Event from './Event'

const windowGlobal = typeof window !== 'undefined' && window


const EventPage = ({ blok }) => {
  // console.log("*********************");
  // console.log(blok);
  // console.log("*********************");

  const events = blok.events.content;
  return (
    <SbEditable content={blok} key={blok._uid}>
      <br/><br/><br/>
      <div class="container">
      <h1>Upcoming Events</h1>
      <br/><br/>
        {
          events.map((event, index) => {
            return(<Event blok={event} />)
          })
        }
        <br/>
      </div>
    </SbEditable>
  )
}
export default EventPage
