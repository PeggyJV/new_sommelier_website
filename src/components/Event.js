import React from "react"
import SbEditable from "storyblok-react"
import { render, NODE_IMAGE } from "storyblok-rich-text-react-renderer"
import { google, outlook, office365, yahoo, ics } from "calendar-link";
var validUrl = require('valid-url');

function tConvert(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }

const Event = ({ blok }) => {
  const event = blok
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  let event_dates = "";
  let location = "";
  let has_image = false;
  let card_div = "";
  let column_size = "col-12";
  let start_date = "";
  let end_date = "";
  let start_time = "";
  let end_time = "";
  let event_time = "";

  let invite_event = {
  title: event.title,
  description: event.description.content[0].content[0].text
  };

  if (event.start_date != "") {
    let date_data = event.start_date.split(" ")
    let date_str = date_data[0]
    start_time = date_data[1]

    let s_date = new Date(date_str);
    s_date.setDate(s_date.getDate() + 1);
    start_date = s_date.toLocaleDateString(undefined, options);

    //start_date = Date(event.start_date.split(" ")[0]).toLocaleDateString(undefined, options)
  }

  if (event.end_date != "") {
    let date_data = event.start_date.split(" ")
    let date_str = date_data[0]
    end_time = date_data[1]

    let s_date = new Date(date_str);
    s_date.setDate(s_date.getDate() + 1);
    end_date = s_date.toLocaleDateString(undefined, options);
  }

  if (start_date != "") {
    event_dates = <h6 class="card-subtitle">Event Date: {start_date}</h6>;
    invite_event.start = event.start_date;
    event_time = <h6 class="card-subtitle">Event Time: {tConvert(start_time)} PT</h6>;
  }

  if (event.start_date != "" && event.end_date != "") {
    if (start_time != end_time) {
      event_time = <h6 class="card-subtitle">Event Time: {tConvert(start_time)} + " to " + {tConvert(end_time)} PT</h6>;
    }
  }

  if (event.location != "") {
    if (validUrl.isUri(event.location)){
        location = <h6 class="card-subtitle">Location: &nbsp;&nbsp;<a href={event.location} class="card-link">{event.location}</a></h6>;
    } else {
        location = <h6 class="card-subtitle">Location: &nbsp;&nbsp;{event.location}</h6>;
    }
  }


  let img_div = "";
  let img_style = "";
  if (event.event_image.filename != "") {
    column_size = "col-6";
    img_style = "width:100%";
    img_div = <div class="col-6"><img src={event.event_image.filename} style={{width: 100 + '%'}} /></div>;
  } else {
    column_size = "col-12";
  }

  console.log(event.start_date);

  return (
    <div>
    <div class='row'>
      <div class='col'>
      <div class="card" >
      <div class="card-body">
          <h5 class="card-title">{ event.title }</h5>
            {event_dates}
            {event_time}
            {location}
            <br/>
            <div class='row'>
            {img_div}
              <div class={column_size}>
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
            <div title="Add to Calendar" class="addeventatc">
                Add to Calendar
                <span class="start">{ event.start_date }</span>
                <span class="end">{ event.end_date }</span>
                <span class="timezone">America/Los_Angeles</span>
                <span class="title">{ event.title }</span>
                <span class="description">{ event.description.content[0].content[0].text }</span>
                <span class="location">{ event.location }</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
    <br/><br/>
    </div>
  )
}

export default Event
