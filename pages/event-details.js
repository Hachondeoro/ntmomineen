import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";

import detailsImage from "../assets/images/events/event-details-1-1.jpg";

const EventDetails = () => {
  return (
    <Layout pageTitle="Event Details Page || Azino || Charity React Next Template">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="Event Details" crumbTitle="Event Details" />
      <>
        <section className="event-details pt-120">
          <Container>
            <Row>
              <Col md={12} lg={6}>
                <h3>Help for needy people</h3>
                <p>
                  There are many people variation of passages of lorem Ipsum
                  available in the majority sed do eius tempor incididunt ut
                  labore et alteration in some. Quuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quiaolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor.
                </p>
                <p>
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum.
                </p>
              </Col>
              <Col md={12} lg={6}>
                <img src={detailsImage} alt="" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </section>
        <div className="event-infos pt-20 pb-90">
          <Container>
            <Row>
              <Col md={12} lg={4} className="mb-30">
                <div className="event-infos__single background-secondary">
                  <h3>Venue</h3>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quiaolor sit
                    amet adipisci veli sed quiae.
                  </p>
                  <ul className="list-unstyled event-infos__list">
                    <li>20 May, 2020</li>
                    <li>9:00am 02:00pm</li>
                    <li>New York</li>
                  </ul>
                  <div className="event-infos__social">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </Col>
              <Col md={12} lg={4} className="mb-30">
                <div className="google-map__event">
                  <iframe
                    title="template google map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                    className="map__event"
                    allowFullScreen
                  ></iframe>
                </div>
              </Col>
              <Col md={12} lg={4} className="mb-30">
                <div className="event-infos__single background-special">
                  <h3>Organizer</h3>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quiaolor sit
                    amet adipisci veli sed quiae.
                  </p>
                  <ul className="list-unstyled event-infos__list event-infos__list-has-icons">
                    <li>
                      <i className="azino-icon-telephone"></i>
                      <a href="tel:0405 736 495">0405 736 495</a>
                    </li>
                    <li>
                      <i className="azino-icon-email"></i>
                      <a href="mailto:info@azino.com">info@azino.com</a>
                    </li>
                    <li>
                      <i className="azino-icon-pin"></i>
                      88 top broklyn street road new york, USA
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
      <Footer />
    </Layout>
  );
};

export default EventDetails;
