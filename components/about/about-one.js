import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about1 from "../../assets/images/shapes/about-bag-1-1.png";
import about2 from "../../assets/images/resources/about-1-1.jpg";
import about3 from "../../assets/images/resources/about-1-2.jpg";
import heart from "../../assets/images/shapes/heart-2-1.png";

const AboutOne = () => {
  return (
    <section className="about-one pt-120 pb-40">
      <Container>
        <Row>
          <div className="about-one__award">
            <img src={about1} alt="" />
          </div>
          <Col lg={6}>
            <img src={about2} alt="" className="img-fluid" />
          </Col>
          <Col lg={6}>
            <img src={about3} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="team-about__top mt-60">
          <Row>
            <Col md={12} lg={4}>
              <div className="block-title">
                <p>
                  <img src={heart} width="15" alt="" />
                  Make a Difference
                </p>
                <h3>Let’s help them together.</h3>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <p className="team-about__top-text">
                Tincidunt elit magnis nulla facilisis sagittis is maecenas.
                Sapien nunced amet ultrices, dolores sit ipsum velit purus
                aliquet, massa fringilla leo orci ipsum dolor sit.
              </p>
            </Col>
            <Col md={12} lg={4}>
              <p className="team-about__top-text">
                Sapien nunced amet ultrices, dolores sit ipsum velit purus
                aliquet, massa fringilla leo orci. Lorem ipsum dolor sit amet.
                consectetur adipisi cing elit dolo.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutOne;
