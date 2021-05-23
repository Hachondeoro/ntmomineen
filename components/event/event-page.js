import React from "react";
import { Container } from "react-bootstrap";
import EventCard from "./event-card";
import PostPaginations from "../post-paginations";

import image1 from "../../assets/images/events/event-1-1.jpg";
import image2 from "../../assets/images/events/event-1-2.jpg";
import image3 from "../../assets/images/events/event-1-3.jpg";
import image4 from "../../assets/images/events/event-1-4.jpg";
import image5 from "../../assets/images/events/event-1-5.jpg";
import image6 from "../../assets/images/events/event-1-6.jpg";

import { request } from "../../components/DatoCMS/datocms.js";
const MYQUERY = `query MyQuery {
  allEvents {
    title
    date
    time
    location
    image {
      url
    }
  }
}
`

export async function getStaticProps() {
  const data = await request({
    query: MYQUERY,
  });
  console.log(data)
  return {
    props: { data },
    revalidate: 10,
  };
}

// const HomeOne = ({ data }) => {

const EVENTS_DATA = [
  {
    image: image1,
    title: "Help for needy people",
    date: "20 May",
    time: "9:00am 02:00pm",
    location: "New York",
  },
  {
    image: image2,
    title: "Help for needy people",
    date: "20 May",
    time: "9:00am 02:00pm",
    location: "New York",
  },
  {
    image: image3,
    title: "Help for needy people",
    date: "20 May",
    time: "9:00am 02:00pm",
    location: "New York",
  },
  {
    image: image4,
    title: "Help for needy people",
    date: "20 May",
    time: "9:00am 02:00pm",
    location: "New York",
  },
  {
    image: image5,
    title: "Help for needy people",
    date: "20 May",
    time: "9:00am 02:00pm",
    location: "New York",
  },
  {
    image: image6,
    title: "Help for needy people",
    date: "20 May",
    time: "9:00am 02:00pm",
    location: "New York",
  },
];
const EventPage = ({ data }) => {
  return (
    <section className="event-page pt-120 pb-120">
      {console.log(data)}
      <Container>
        <div className="event-grid">
          {EVENTS_DATA.map((event, index) => (
            <EventCard data={event} key={`event-card-key-${index}`} />
          ))}
        </div>
        <PostPaginations />
      </Container>
    </section>
  );
};

export default EventPage;
