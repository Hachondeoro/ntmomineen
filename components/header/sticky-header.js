import React, { useState, useEffect } from "react";

import Link from "next/link";
import NavLinks from "./nav-links";

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
        </div>
        <div className="sticky-header__content">
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
