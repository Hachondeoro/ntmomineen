import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import heartImage from "../../assets/images/shapes/heart-2-1.png";
import bgImage from "../../assets/images/team/team-map-1-1.png";


const TeamHome = (props) => {
  return (
    <section
      className="team-about pt-120 pb-120"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}>
      <Container>
        <div className="team-about__top">
          <Row className=" align-items-center">
            <Col md={12} lg={7}>
              <div className="block-title">
                <p>
                  <img src={heartImage} width="15" alt="" />
                  Our Committee
                </p>
                <h3>
                  Meet those who help <br /> others in need.
                </h3>
              </div>
            </Col>
            <Col md={12} lg={5}>
              <p className="team-about__top-text">
                These are the leaders shaping our community and guiding our future.{" "}
              </p>
            </Col>
          </Row>
        </div>
        <div className="">
          <Row>
            {props.members.map(({ image, name, designation }, index) => (
              <div
                className={`team-card text-center content-bg-2 teamMobile ml-auto mr-auto text-center`}
                key={`team-card-key-${index}`}>
                <div className="team-card__image">
                  <img src={image.url} alt="" />
                </div>

                <div className="team-card__content">
                  <h3>{name}</h3>
                  <p>{designation}</p>
                </div>
              </div>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default TeamHome;
