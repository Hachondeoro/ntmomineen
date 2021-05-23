import React, { useState, useEffect } from "react";

import Link from "next/link";
import NavLinks from "./nav-links";
import logoLight from "../../assets/images/logo-light.png";

const StickyHeader = ({ extraClassName }) => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 130) {
      setSticky(true);
    } else if (window.scrollY < 130) {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={`stricky-header stricked-menu ${extraClassName} ${
        sticky === true ? "stricky-fixed" : " "
      }`}
    >
      <div className="container">
        <div className="logo-box">
          <Link href="/">
            <a aria-label="logo image">
              <img src={logoLight} width="101" alt="" />
            </a>
          </Link>
        </div>
        <div className="sticky-header__content">
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
