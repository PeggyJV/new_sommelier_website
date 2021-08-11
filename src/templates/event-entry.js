
import React from "react"
import EventPage from '../components/EventPage'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import { Router } from '@reach/router'
import StoryblokService from '../utils/storyblok-service'
import SEO from "../components/EventSeo"

import "../assets/scss/blog.scss"
import "../assets/scss/main.scss"

export default class extends React.Component {
  constructor(props) {
    super(props);
    let content =  []

    //let s_date = new Date(event.start_date.split(" ")[0]);
    console.log("pagecontext");
    console.log(props.pageContext);

    content.push(props.pageContext.story);
    // props.data.stories.edges.forEach((story) => {
    //   console.log(story.node.full_slug);
    //   if(story.node.full_slug.includes('events/')) {
    //     content.push(story.node);
    //   }
    // });
    //
    this.state = {
      events: { content }
    };
  }

  async countDown(countDownDate, elementId) {
    // Set the date we're counting down to
    //var countDownDate = new Date(dateTime).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get today's date and time
      var now_ish = new Date();
      var now = now_ish.getTime() +  now_ish.getTimezoneOffset() * 60000;
      now  = new Date(now_ish.toLocaleString(undefined));

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById(elementId).innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById(elementId).innerHTML = "COMPLETED";
      }
    }, 250);
  }

  async componentDidMount() {
    //console.log(this.state.events.content);
    this.state.events.content.map((event, index) => {
      console.log('count down date', event.countDownDate);
      this.countDown(event.countDownDate, event.uid);
    });
  }

  render() {

    return (
      <Layout location={this.props.location}>
        <SEO title="Events" description="Sommelier upcoming events." content={JSON.parse(this.props.pageContext.story.content)}/>

          <EventPage blok={this.state} title='Upcoming Events' history={false}  join_community={true} />

      </Layout>
    )
  }
}
