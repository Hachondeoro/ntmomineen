import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import serviceBg from "../../assets/images/backgrounds/service-hand-bg-1-1.png";
import serviceLine from "../../assets/images/shapes/service-line-1-1.png";
import islamicCalendar from "public/shiacalendar2.pdf";
import EventCard from "@components/event/event-card";
import PostPaginations from "@components/post-paginations";


const ServiceOne = (props) => {
  return (
    <section
      className="service-one pt-120 pb-10"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <Container>
        <img src={serviceLine} alt="" className="service-one__shape-1" />
        <div className="block-title">
          <a
            className="scroll-to-target thm-btn"
            data-target=".donate-options"
            href={islamicCalendar}
            target="_blank"
          >
            Download Yearly Islamic Calendar 1442A.H.
          </a>
        </div>
        <div className="block-title">
          <h3>Upcoming events</h3>
          <section className="event-page pt-20">
            <Container>
              <div className="event-grid">
                {props.events.map((event, index) => (
                  <EventCard data={event} key={`event-card-key-${index}`} />
                ))}
              </div>
            </Container>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default ServiceOne;
