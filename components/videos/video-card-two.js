import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Container, Row, Col } from "react-bootstrap";
import videoBg from "../../assets/images/shapes/video-bg-1-1.png";
import videoImage from "../../assets/images/resources/tl.png";

const VideoCardTwo = () => {
  const [isOpen, setOpen] = useState(false);
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
                <span
                  className="video-card-two__box-btn video-popup"
                  onClick={() => setOpen(true)}
                >
                  <i className="fa fa-play"></i>
                </span>
              </div>
            </Col>
            <Col lg={4}>
              <h3>We're the leading muslim organization in the Northern Territory</h3>
            </Col>
            <Col lg={5}>
              <p>
              The Northern Territory Momineen Association (NTMA) is a
              non-profit registered organization of the Shia Ithna Asheri Muslim
              community of Darwin, Australia. <br /> It is serving the religious
              and educational needs of over 100 members of the Urdu speaking
              community of India, Pakistan, East Africa, Singapore and
              Afghanistan.{" "}
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default VideoCardTwo;
