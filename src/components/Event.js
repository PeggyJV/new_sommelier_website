import React from "react"
import SbEditable from "storyblok-react"
import { render, NODE_IMAGE } from "storyblok-rich-text-react-renderer"
import { google, outlook, office365, yahoo, ics } from "calendar-link";

const Event = ({ blok }) => {
  const event = JSON.parse(blok.content);

  console.log(event);

  let event_dates = "";

  let invite_event = {
  title: event.title,
  description: event.description.content[0].content[0].text
  };

  if (event.start_date != "") {
    event_dates = <h6 class="card-subtitle">{ event.start_date }</h6>;
    invite_event.start = event.start_date;
  }

  if (event.start_date != "" && event.end_date != "") {
    event_dates = <h6 class="card-subtitle">{ event.start_date + " - " + event.end_date}</h6>;
    invite_event.end = event.end_date;
  }


  console.log(google(invite_event));

  return (
    <div>
    <div class='row'>
      <div class='col'>
      <div class="card" >
      <div class="card-body">
        <h5 class="card-title">{ event.title }</h5>
        {event_dates}
        <p class="card-text">{render(event.description, {
          nodeResolvers: {
            [NODE_IMAGE]: (children, props) => <img {...props} />
          },
          blokResolvers: {
            ['YouTube-blogpost']: (props) => (
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src={ "https://www.youtube.com/embed/" + props.YouTube_id.replace('https://youtu.be/', '')  }></iframe>
              </div>
              )
          }
        })}</p>
        <a href={google(invite_event)} class="card-link" target="_blank">Add To Google Calender</a>
      </div>
      </div>
      </div>
    </div>
    <br/><br/>
    </div>
  )
}

export default Event
