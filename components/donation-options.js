import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heartImage from "../assets/images/shapes/heart-2-1.png";

const DonationOptions = () => {
  return (
    <section className="pt-120">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="donate-options__content">
              <div className="block-title">
                <p>
                  <img src={heartImage} width="15" alt="" />
                  Donate Now
                </p>
                <h3>
                  Give a helping hand <br /> for the people in need.
                </h3>
              </div>
              <p>
                Northern Territory Momineen Incorporated (NTMI) is an
                incorporated non-profit organization located in the Darwin area,
                Northern Territory, Australia. Please donate generously.{" "}
              </p>
              <div className="donate-options__call">
                <i className="azino-icon-telephone"></i>
                <div className="donate-options__call-content">
                  <p>
                    Have any question about donation? <br />{" "}
                    <span>Call us now:</span>{" "}
                    <a href="tel:0448 192 130"> 0448 192 130</a>
                  </p>
                </div>
              </div>
              <div className="donate-options__icon-wrap">
                <div className="donate-options__icon">
                  <i className="azino-icon-dove"></i>
                  <h3>Living</h3>
                </div>
                <div className="donate-options__icon">
                  <i className="azino-icon-hamburger"></i>
                  <h3>Food</h3>
                </div>
                <div className="donate-options__icon">
                  <i className="azino-icon-family"></i>
                  <h3>Family</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
          <div className="custom">
                <iframe
                  width="100%"
                  height="800px"
                  frameBorder="no"
                  src="https://ntmomineen.wildapricot.org/widget/donations"
                ></iframe>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DonationOptions;
