import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Container, Row, Col } from "react-bootstrap";
import heartImage from "../../assets/images/shapes/heart-2-1.png";
import aboutImage from "../../assets/images/resources/background3.jpg";
import aboutHeart from "../../assets/images/shapes/about-count-heart-1-1.png";

const AboutCounter = () => {
  const [counter, setCounter] = useState({
    startCounter: false,
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="about-counter pt-120">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="block-title">
              <p>
                <img src={heartImage} width="15" alt="" />
                Help People Now
              </p>
              <h3>
                Charity for the Muslim Community <br />
                in the Northern Territory
              </h3>
            </div>
            <p className="about-counter__text">
              The Northern Territory Momineen Incorporated (NTMI) is a
              non-profit registered organization of the Shia Ithna Asheri Muslim
              community of Darwin, Australia. <br /> It is serving the religious
              and educational needs of over 100 members of the Urdu speaking
              community of India, Pakistan, East Africa, Singapore and
              Afghanistan.{" "}
            </p>
            <ul className="list-unstyled ul-list-one">
              <li>Incorporated in the Northern Territory</li>
              <li>Over 100 community members</li>
              <li>Transparency at heart</li>
            </ul>
          </Col>
          <Col lg={6}>
            <div className="about-counter__image clearfix">
              <div className="about-counter__image-content">
                <img src={aboutHeart} alt="" />
                <p>We’re here to support you every moment of your life</p>
              </div>
              <img src={aboutImage} alt="" width="800em" className="float-left" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCounter;
