import React, {useEffect, useState} from 'react'
import SbEditable from 'storyblok-react'
import {isMobileOnly} from 'react-device-detect'
import { navigate } from 'gatsby-link';
import Event from './Event'

const windowGlobal = typeof window !== 'undefined' && window


const EventPage = ({ blok }) => {
  const events = blok.events.content;
  return (
    <SbEditable content={blok} key={blok._uid}>
      <br/><br/><br/>
      <div class="container">
      <h1>Upcoming Events</h1>

      <br/><br/>
        {
          events.reverse().map((blok, index) => {
            const event = JSON.parse(blok.content);
            let s_date = new Date(event.start_date.split(" ")[0]);
            let today = new Date();
            s_date.setDate(s_date.getDate() + 2);

            if (s_date > today) {
              return(<Event blok={event} />)
            }
          })
        }
        <br/>
      </div>
    </SbEditable>
  )
}
export default EventPage
