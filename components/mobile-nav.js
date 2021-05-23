import React from "react";
import Link from "next/link";
import NavLinks from "./header/nav-links";

import logoLight from "../assets/images/resources/banneramber.png";

const MobileNav = () => {
  return (
    <div className="mobile-nav__wrapper">
      <div className="mobile-nav__overlay side-menu__block-overlay"></div>
      <div className="mobile-nav__content">
        <span className="mobile-nav__close side-menu__close-btn">
          <i className="far fa-times"></i>
        </span>

        <div className="logo-box">
          <Link href="/">
            <a aria-label="logo image">
              <img src={logoLight} width="250" alt="" />
            </a>
          </Link>
        </div>
        <div className="mobile-nav__container">
          <NavLinks />
        </div>

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="azino-icon-email"></i>
            <a href="mailto:info@ntmominee.com.au">info@ntmominee.com.au</a>
          </li>
          <li>
            <i className="azino-icon-telephone"></i>
            <a href="tel:0448 192 130">0448 192 130</a>
          </li>
        </ul>
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
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
      </div>
    </div>
  );
};

export default MobileNav;
