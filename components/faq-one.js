import React, { useContext } from "react";
import { Accordion, Container, Row, Col, Card } from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import heart from "../assets/images/shapes/heart-2-1.png";
import heart1 from "../assets/images/shapes/about-count-heart-1-1.png";
import faqImage from "../assets/images/resources/faq-box-1-1.jpg";

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <h2
      className="para-title"
      style={{ color: `${isCurrentEventKey ? "var(--thm-secondary)" : ""}` }}
    >
      <span onClick={decoratedOnClick}>
        <i
          style={{
            color: `${isCurrentEventKey ? "var(--thm-secondary)" : ""}`
          }}
          className={`far ${isCurrentEventKey ? "fa-minus" : "fa-plus"}`}
        ></i>
        {children}
      </span>
    </h2>
  );
};
const FaqOne = () => {
  return (
    <section className="faq-one pt-120">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="faq-one__content">
              <div className="block-title">
                <p>
                  <img src={heart} width="15" alt="" />
                  Help People Now
                </p>
                <h3>
                  Charity for the people <br /> you care about.
                </h3>
              </div>

              <Accordion
                as="ul"
                id="accordion"
                defaultActiveKey="1"
                className="list-unstyled"
              >
                <Card as="li">
                  <ContextAwareToggle eventKey="0">
                    Make a difference in their life
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="0">
                    <p>
                      There are many variations of passages the majority have
                      suffered alteration in some fo injected humour, or
                      randomised words believable.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="1">
                    Make a difference in their life
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="1">
                    <p>
                      There are many variations of passages the majority have
                      suffered alteration in some fo injected humour, or
                      randomised words believable.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="2">
                    Make a difference in their life
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="2">
                    <p>
                      There are many variations of passages the majority have
                      suffered alteration in some fo injected humour, or
                      randomised words believable.
                    </p>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-counter__image clearfix">
              <div className="about-counter__image-content">
                <img src={heart1} alt="" />
                <p>We’re here to support you every step of the way.</p>
              </div>
              <img src={faqImage} alt="" className="float-left" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqOne;
