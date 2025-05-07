import React, { useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import NavLinks from "./nav-links";

import logoDark from "../../assets/images/resources/logo-vertical.jpg";

const HeaderOne = () => {
  useEffect(() => {
    mobileMenu();
    return () => {
      mobileMenu();
    };
  });
  

  const mobileMenu = () => {
    document
      .querySelector(".mobile-nav__toggler")
      .addEventListener("click", function (e) {
        document
          .querySelector(".mobile-nav__wrapper")
          .classList.toggle("expanded",true);
        e.preventDefault();
      });
    // search toggler
    let searchCloser = document.querySelectorAll(".search-toggler");
    searchCloser.forEach((searchCloserBtn) => {
      searchCloserBtn.addEventListener("click", function (e) {
        document.querySelector(".search-popup").classList.toggle("active");
        e.preventDefault();
      });
    });

    //Close Mobile Menu
    let sideMenuCloser = document.querySelectorAll(
      ".side-menu__close-btn, .side-menu__block-overlay"
    );

    sideMenuCloser.forEach((sideMenuCloserBtn) => {
      sideMenuCloserBtn.addEventListener("click", function (e) {
        document
          .querySelector(".mobile-nav__wrapper")
          .classList.remove("expanded");
        e.preventDefault();
      });
    });
  };
  return (
    <header className="main-header">
      <Container>
        <div className="inner-container">
          <Row>
            <Col sm={12} md={12} lg={12} xl={2}>
              <div className="logo-box">
                <Link href="/">
                  <a aria-label="logo image">
                    <img src={logoDark} width="150em" alt="" />
                  </a>
                </Link>
                <span className="fa fa-bars mobile-nav__toggler"></span>
              </div>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={12}
              xl={10}
              className="d-none d-md-none d-lg-none d-xl-block"
            >
              <div className="main-header__top">
                <p>Welcome to the Northern Territory Momineen Incorporated</p>
                <div className="main-header__social">
                  <a
                    href="https://www.facebook.com/groups/1666590756754465"
                    aria-label="facebook"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#" aria-label="linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" aria-label="instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <nav className="main-menu dynamic-radius">
                <NavLinks />
              </nav>

              <div className="main-header__info">
                <ul className="list-unstyled main-header__info-list">
                  <li>
                    <i className="azino-icon-email"></i>
                    <a href="mailto:ntmomineen@gmail.com">
                      ntmomineen@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="azino-icon-telephone"></i>
                    <a href="tel:0405 736 495">0405 736 495</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </header>
  );
};

export default HeaderOne;
