import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heartImage from "../../assets/images/shapes/heart-2-1.png";
import bgImage from "../../assets/images/team/team-map-1-1.png";
import teamImage1 from "../../assets/images/team/team-2-1.jpg";
import teamImage2 from "../../assets/images/team/team-2-2.jpg";
import teamImage3 from "../../assets/images/team/team-2-3.jpg";
import teamImage4 from "../../assets/images/team/team-2-4.jpg";

const TeamData = [
  {
    image: teamImage1,
    extraClassName: "content-bg-1",
    name: "Ali Dhirani",
    designation: "Community Leader",
    social: [
      {
        link: "#",
        socialClass: "fab fa-facebook-square"
      },
      {
        link: "#",
        socialClass: "fab fa-linkedin"
      },
      
    ]
  },
  {
    image: teamImage2,
    extraClassName: "content-bg-2",
    name: "Murad Quasim",
    designation: "Treasurer",
    social: [
      {
        link: "#",
        socialClass: "fab fa-facebook-square"
      },
      {
        link: "#",
        socialClass: "fab fa-linkedin"
      },
      
    ]
  },
  {
    image: teamImage3,
    extraClassName: "content-bg-3",
    name: "Ibne Hussain",
    designation: "Accounting",
    social: [
      {
        link: "#",
        socialClass: "fab fa-facebook-square"
      },
      {
        link: "#",
        socialClass: "fab fa-linkedin"
      },
      
    ]
  },
  {
    image: teamImage4,
    extraClassName: "content-bg-4",
    name: "Frank Espinoza",
    designation: "Student",
    social: [
      {
        link: "#",
        socialClass: "fab fa-facebook-square"
      },
      {
        link: "#",
        socialClass: "fab fa-linkedin"
      },
      
    ]
  }
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
                These are the leaders shaping our community and guiding our future.{" "}
              </p>
            </Col>
          </Row>
        </div>
        <div className="team-4-col">
          {TeamData.map(
            ({ image, extraClassName, name, designation, social }, index) => (
              <div
                className={`team-card text-center ${extraClassName}`}
                key={`team-card-key-${index}`}
              >
                <div className="team-card__image">
                  <img src={image} alt="" />
                </div>
                <div className="team-card__social">
                  {social.map(({ link, socialClass }, index) => (
                    <a
                      href={link}
                      aria-label="social link"
                      key={`social-link-key-${index}`}
                    >
                      <i className={socialClass}></i>
                    </a>
                  ))}
                </div>
                <div className="team-card__content">
                  <h3>{name}</h3>
                  <p>{designation}</p>
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default TeamHome;
