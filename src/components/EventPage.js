import React, {useEffect, useState} from 'react'
import SbEditable from 'storyblok-react'
import {isMobileOnly} from 'react-device-detect'
import { navigate } from 'gatsby-link';
import Event from './Event'

const windowGlobal = typeof window !== 'undefined' && window


const EventPage = ({ blok, title, history }) => {
  const events = blok.events.content;
  let see_history = "";
  if(!history) {
    see_history = <a href="/events/history">See passed events</a>
  }

  return (
    <SbEditable content={blok} key={blok._uid}>
      <br/><br/><br/>
      <div class="container">
      <h1>{title}</h1>

      <br/><br/>
        {
          events.reverse().map((blok, index) => {
            const event = JSON.parse(blok.content);

            return(<Event blok={event} history={history} />)
          })
        }
        <br/>
        <h2><center>{see_history}</center></h2>
        <br/>
        <br/>
      </div>
    </SbEditable>
  )
}
export default EventPage
