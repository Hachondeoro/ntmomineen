import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import { Container, Row, Col } from "react-bootstrap";
import videoBg from "../../assets/images/shapes/video-bg-1-1.png";
import videoImage from "../../assets/images/resources/tl.png";

const VideoCardTwo = () => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {}, []);
  return (
    <section className="video-card-two">
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
                // id="g2hFrame"
                className="islamicCalendar"
                title="islamic-calendar"
                scrolling="off"
                src="https://prayer-times.info/en/show_prayertimes.php?city_link=darwin&country_link=australia&box_style=2&nodate=1"
              ></iframe>
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
