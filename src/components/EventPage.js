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
  } else {
    see_history = <a href="/events">See upcoming events</a>
  }
  console.log("*********DSJHKFBJ*******");
  console.log(events);
  console.log(events.sort(function(a, b){return parseInt(JSON.parse(a.content).start_date.split(" ")[0].replace(/-/g, '')) - parseInt(JSON.parse(b.content).start_date.split(" ")[0].replace(/-/g, ''))}));
  console.log("*********DSJHKFBJ*******");
  return (
    <SbEditable content={blok} key={blok._uid}>
    <style dangerouslySetInnerHTML={{__html: `
      a {  color: white; }
    `}}/>
      <br/><br/><br/>
      <div class="container">
      <h1><a href="/events">Upcoming Events</a><span  style={{float: 'right'}}><a href="/events/history">PAST EVENTS</a></span></h1>

      <br/><br/>
        {
          events.map((blok, index) => {
            const event = JSON.parse(blok.content);
            //console.log(event);
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
