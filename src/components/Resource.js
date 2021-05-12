import React from "react"
import SbEditable from "storyblok-react"
import { render, NODE_IMAGE } from "storyblok-rich-text-react-renderer"
import { google, outlook, office365, yahoo, ics } from "calendar-link";
var validUrl = require('valid-url');


const Resource = ({ blok }) => {
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
  let s_date;
  let e_date;

  let invite_event = {
  title: event.title,
  description: event.description.content[0].content[0].text
  };


  if (event.location != "") {
    if (validUrl.isUri(event.location)){
        location = <h6 class="card-subtitle">Location: &nbsp;&nbsp;<a href={event.location} class="card-link">{event.location}</a></h6>;
    } else {
        location = <h6 class="card-subtitle">Location: &nbsp;&nbsp;{event.location}</h6>;
    }
  }


  let img_div = "";
  let img_style = "";
  
  if (!!event.image.filename) {
    column_size = "col-6";
    img_style = "width:100%";
    img_div = <div class="col-6"><img src={event.image.filename} style={{width: 100 + '%'}} /></div>;
  } else {
    column_size = "col-12";
  }

console.log(event.image.filename);
  return (
    <div>
    <div class='row'>
      <div class='col'>
      <div class="card" >
      <div class="card-body">
          <h2 ><a href={event.location} target="_blank" style={{fontFamily: 'Barlow Condensed Bold',
fontStyle: 'bold',
fontWeight: 500,
marginTop: 0,
color: '#fff',
fontSize: '1.9rem',
lineHeight: '133.1%',
textAlign: 'left'}}>{ event.title }</a></h2>
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

export default Resource
