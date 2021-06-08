import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import heart from "../../assets/images/shapes/heart-2-1.png";
import welcomeImage from "../../assets/images/resources/welcome-1-1.png";
import aboutImage from "../../assets/images/shapes/about-bag-1-2.png";

const AboutTwo = () => {
  return (
    <section className="about-two pt-120 pb-120">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="about-two__image">
              <img src={welcomeImage} alt="" />
              <div className="about-two__award">
                <img src={aboutImage} alt="" />
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-two__content">
              <div className="block-title">
                <p>
                  <img src={heart} width="15" alt="" /> About Azino Platform
                </p>
                <h3>Welcome to the Northern Territory Momineen Incorporated</h3>
              </div>
              <p className="mb-40 pr-10">
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                sed do eiusmod tempor incididunt simply free ut labore et dolore
                magna aliqua simhy adndnh qkhhn.
              </p>
              <Row>
                <Col md={6}>
                  <div className="about-two__box">
                    <h3>
                      <i className="azino-icon-confirmation"></i> Become a
                      Volunteer
                    </h3>
                    <p>
                      Lorem ipsum dolor sit ametelit sed consectetur notted.
                    </p>
                  </div>
                  <div className="about-two__box">
                    <h3>
                      <i className="azino-icon-confirmation"></i> Quick
                      Fundraising
                    </h3>
                    <p>
                      Lorem ipsum dolor sit ametelit sed consectetur notted.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="about-two__box-two">
                    <i className="azino-icon-support"></i>
                    <h3>You can make a big difference in someone’s life.</h3>
                  </div>
                </Col>
              </Row>
              <Link href="/about">
                <a className="thm-btn dynamic-radius">Discover More</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
