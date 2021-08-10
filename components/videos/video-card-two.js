import ashra from "@assets/images/events/ashra.jpg";
import asura from "@assets/images/events/asurablood_2.jpeg";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ModalVideo from "react-modal-video";
import videoImage from "../../assets/images/resources/tl.png";
import videoBg from "../../assets/images/shapes/video-bg-1-1.png";

const VideoCardTwo = () => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {}, []);
  return (
    <section className="video-card-two">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="5">
            <div>
              <img src={ashra} alt="Ashra" width="100%" />
            </div>
          </Col>
          <Col className="ml-auto mr-auto text-center" md="5">
            <div>
              <img src={asura} alt="Asura blood campaign" width="100%" />
            </div>
          </Col>
        </Row>
      </Container>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="wgP_OSOS3IA"
        onClose={() => setOpen(false)}
      />
      <Container>
        <div
          className="inner-container"
          style={{ backgroundImage: `url(${videoBg})` }}
        >
          <Row className="align-items-center">
            <Col lg={3}>
              <div className="video-card-two__box">
                <img src={videoImage} alt="" width="200px" />
              </div>
            </Col>
            <Col lg={4} className="ml-auto mr-auto text-center">
              <iframe
                title="islamic-calendar"
                className="islamicCalendar"
                scrolling="off"
                src="https://www.islamicfinder.org/prayer-widget/2158177/shafi/1/0/18.0/17.0"
              >
                {" "}
              </iframe>
            </Col>
            <Col lg={5}>
              <p>
                Northern Territory Momineen Incorporated (NTMI) is a non-profit
                registered organization of the Shia Ithna Asheri Muslim
                community of Darwin, Australia. <br /> It is serving the
                religious and educational needs of over 100 members from
                communities of India, Pakistan, East Africa, Singapore,
                Afghanistan, Lebanon, Iraq, Syria and Iran.
              </p>
              <br />
            </Col>
            <Col></Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default VideoCardTwo;
