import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heartImage from "../assets/images/shapes/heart-2-1.png";

const DonationOptions = () => {
  return (
    <section className="donate-options pt-120">
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
            <form
              action="#"
              className="donate-options__form wow fadeInUp"
              data-wow-duration="1500ms"
            >
              <h3 className="text-center">Start donating now</h3>
              <p className="text-center">We accept donations via Paypal</p>
              <label htmlFor="donate-name" className="sr-only"></label>
              <input type="text" id="donate-name" placeholder="Your Name" />
              <label htmlFor="donate-amount" className="sr-only"></label>
              <input
                type="text"
                placeholder="Donation Amount"
                id="donate-amount"
              />
              <ul id="donate-amount__predefined" className="list-unstyled">
                <li>
                  <a href="#">$10</a>
                </li>
                <li>
                  <a href="#">$20</a>
                </li>
                <li>
                  <a href="#">$50</a>
                </li>
              </ul>
              <button type="submit" className="thm-btn ">
                Donate Now
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DonationOptions;
