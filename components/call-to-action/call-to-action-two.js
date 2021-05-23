import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import bgImage from "../../assets/images/backgrounds/page-header-1-1.jpg";
import HeartImage from "../../assets/images/shapes/heart-2-1.png";

const CallToActionTwo = () => {
  return (
    <section className="call-to-action-two">
      <div
        className="call-to-action-two__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <Container className="container pt-80 pb-80">
        <i className="azino-icon-charity call-to-action-two__icon"></i>
        <Row className=" align-items-center">
          <Col lg={7}>
            <div className="block-title">
              <p>
                <img src={HeartImage} width="15" alt="" />
                Help Other People
              </p>
              <h3>
                Our fingerprints on <br /> the lives we touch <br /> never fade.
              </h3>
            </div>
          </Col>
          <Col
            lg={5}
            className=" d-flex justify-content-start justify-content-lg-end"
          >
            <div className="btn-wrap">
              <Link href="#">
                <a className="scroll-to-target thm-btn">Start Donating</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToActionTwo;
