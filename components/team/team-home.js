import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heartImage from "../../assets/images/shapes/heart-2-1.png";
import bgImage from "../../assets/images/team/team-map-1-1.png";
import ali from "../../assets/images/team/ali-face.jpg";
import adeel from "../../assets/images/team/adeel.jpg";
import amjid from "../../assets/images/team/amjid.jpg";
import aun from "../../assets/images/team/aun.jpg";
import ibne from "../../assets/images/team/ibne.jpg";
import kazim from "../../assets/images/team/kazim.jpg";
import syed from "../../assets/images/team/syed.jpg";

const TeamData = [
  {
    image: syed,
    extraClassName: "content-bg-1",
    name: "Syed Murad Quasim",
    designation: "President",
  },
  {
    image: amjid,
    extraClassName: "content-bg-2",
    name: "Ali Amjid",
    designation: "Vice President",
  },
  {
    image: ali,
    extraClassName: "content-bg-3",
    name: "Ali Dhirani",
    designation: "Secretary",
  },
  {
    image: kazim,
    extraClassName: "content-bg-3",
    name: "Kazim Raza",
    designation: "Treasurer",
  },
  {
    image: adeel,
    extraClassName: "content-bg-3",
    name: "Adeel Abbas",
    designation: "Committee Member",
  },
  {
    image: aun,
    extraClassName: "content-bg-3",
    name: "Aun Kazmi",
    designation: "Committee Member",
  },
  {
    image: ibne,
    extraClassName: "content-bg-4",
    name: "Ibne Hussain",
    designation: "Public Officer",
  },
];

const TeamHome = () => {
  return (
    <section
      className="team-about pt-120 pb-120"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
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
                These are the leaders shaping our community and guiding our
                future.{" "}
              </p>
            </Col>
          </Row>
        </div>
        <div className="">
          
          <Row>
          {TeamData.map(
            ({ image, extraClassName, name, designation, social }, index) => (
              <div
                className={`team-card text-center ${extraClassName} teamMobile ml-auto mr-auto text-center`}
                key={`team-card-key-${index}`}
              >
                <div className="team-card__image">
                  <img src={image} alt="" />
                </div>

                <div className="team-card__content">
                  <h3>{name}</h3>
                  <p>{designation}</p>
                </div>
              </div>
            )
          )}
          </Row>
          
        </div>
      </Container>
    </section>
  );
};

export default TeamHome;
