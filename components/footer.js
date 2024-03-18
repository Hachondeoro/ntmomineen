import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import logoLight from "../assets/images/resources/banneramber.png";
import logoSamaf from "../assets/images/samaflogo2.png";
import logoBakery from "../assets/images/313bakery.png";
import logoTabassums from "../assets/images/tabassums.png";

const Footer = () => {
  return (
    <section className="site-footer">
      <div className="main-footer pt-142 pb-80">
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
                <Container>
                <Row>
                  <Col xs={6}>
                    <Link href="/">
                      <a aria-label="logo image">
                        <img
                          src={logoLight}
                          className="footer-widget__logo mx-auto"
                          width="100%"
                          alt=""
                        />
                      </a>
                    </Link>
                    <br />
                    <Link href="/">
                      <a aria-label="logo image">
                        <img
                          src={logoTabassums}
                          className="footer-widget__logo mx-auto"
                          width="100%"
                          alt=""
                        />
                      </a>
                    </Link>
                  </Col>
                  <Col xs={6}>
                    <Link href="/">
                      <a aria-label="logo image">
                        <img
                          src={logoSamaf}
                          className="footer-widget__logo mx-auto"
                          width="80%"
                          alt=""
                        />
                      </a>
                    </Link>
                    <br />
                    <br />
                    <Link href="/">
                      <a aria-label="logo image">
                        <img
                          src={logoBakery}
                          className="footer-widget__logo mx-auto"
                          width="80%"
                          alt=""
                        />
                      </a>
                    </Link>
                  </Col>
                </Row>
                </Container>
                <p>
                  {/* Lorem ipsum dolor sit amet consect etur adi pisicing elit sed. */}
                </p>
                <ul className="list-unstyled footer-widget__contact">
                  <li>
                    <a href="#">
                      <i className="azino-icon-telephone"></i>414 880 169
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="azino-icon-email"></i>ntmomineen@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="azino-icon-pin"></i>Darwin NT, Australia
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">Explore</h3>
                <ul className="list-unstyled footer-widget__link-list">
                  <li>
                    <Link href="/events">
                      <a>Upcoming Events</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Help</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/donations">
                      <a>Donate</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__newsletter">
                <h3 className="footer-widget__title">Newletter</h3>
                <p>Signup now to get daily latest news & updates from us</p>
                <form
                  data-url="https://xyz.us18.list-manage.com/subscribe/post?u=20e91746ef818cd941998c598&id=cc0ee8140e"
                  className="footer-widget__newsletter-form mc-form"
                >
                  <label htmlFor="mc-email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    id="mc-email"
                    className=""
                    placeholder="Email address"
                  />
                  <div className="footer-widget__newsletter-btn-wrap d-flex justify-content-end">
                    <button type="submit" className="thm-btn ">
                      Subscribe Now
                    </button>
                  </div>
                </form>
                <div className="mc-form__response"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <ScrollLink
            to="wrapper"
            smooth={true}
            duration={500}
            className="scroll-to-top"
          >
            <i className="far fa-angle-up"></i>
          </ScrollLink>
          <p>&copy; {new Date().getFullYear()} Copyright by NT Mominee</p>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/groups/1666590756754465"
              aria-label="facebook"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" aria-label="instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
