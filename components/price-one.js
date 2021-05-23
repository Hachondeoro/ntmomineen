import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import heart from "../assets/images/shapes/heart-2-1.png";
import priceBox from "../assets/images/resources/price-box-1-1.jpg";
const PRICE_ONE_DATA = [
  {
    title: "Silver Package",
    icon: "fa fa-paper-plane",
    extraClassName: "",
    price: "$30.00",
    options: [
      {
        text: "Free text goes here"
      },
      {
        text: "Write here anything"
      },
      {
        text: "Above mention it"
      },
      {
        text: "Say once again"
      }
    ],
    button: {
      link: "#",
      label: "Choose Plan"
    }
  },
  {
    title: "Gold Package",
    icon: "fa fa-plane",
    extraClassName: "gold",
    price: "$60.00",
    options: [
      {
        text: "Free text goes here"
      },
      {
        text: "Write here anything"
      },
      {
        text: "Above mention it"
      },
      {
        text: "Say once again"
      }
    ],
    button: {
      link: "#",
      label: "Choose Plan"
    }
  }
];
const PriceOne = () => {
  return (
    <section className="price-one">
      <Container>
        <Row>
          <Col xl={5}>
            <div className="price-one__main">
              <div className="block-title">
                <p>
                  <img src={heart} width="15" alt="" />
                  Popular Causes
                </p>
                <h3>
                  Donate to charity causes <br /> around the world.
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.{" "}
              </p>
              <div className="price-one__image-box">
                <img src={priceBox} alt="" />
                <div className="price-one__image-box-content">
                  <h3>
                    <i className="fa fa-check"></i> Fundraising Platform
                  </h3>
                  <p>
                    Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem is simply free text quis
                    bibendum.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={7}>
            <Row>
              {PRICE_ONE_DATA.map(
                (
                  { title, icon, price, extraClassName, options, button },
                  index
                ) => (
                  <Col md={6} key={`price-one-key-${index}`}>
                    <div className={`price-one__single ${extraClassName}`}>
                      <i className={icon}></i>
                      <p>{title}</p>
                      <h3>{price}</h3>
                      <ul className="price-one__list">
                        {options.map(({ text }, index) => (
                          <li key={`price-one-list-key-${index}`}>{text}</li>
                        ))}
                      </ul>
                      <Link href={button.link}>
                        <a className="thm-btn dynamic-radius">{button.label}</a>
                      </Link>
                    </div>
                  </Col>
                )
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PriceOne;
