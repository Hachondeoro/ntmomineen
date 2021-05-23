import React, { useEffect } from "react";
import Head from "next/head";
import MobileNav from "./mobile-nav";
import SearchPopup from "./search-popup";

import AppleTouch from "../assets/images/favicons/apple-touch-icon.png";
import Fevicon32 from "../assets/images/favicons/favicon-32x32.png";
import Fevicon16 from "../assets/images/favicons/favicon-16x16.png";

const Layout = ({ pageTitle, children }) => {
  const handleRadius = () => {
    const dynamicRadius = document.querySelectorAll(".dynamic-radius");
    dynamicRadius.forEach(function (btn) {
      let btnHeight = btn.offsetHeight;
      btn.style.borderBottomLeftRadius = btnHeight / 2 + "px";
      btn.style.borderTopLeftRadius = btnHeight / 2 + "px";
    });
  };

  useEffect(() => {
    handleRadius();
    return () => {
      handleRadius();
    };
  });
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <link rel="apple-touch-icon" sizes="180x180" href={AppleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={Fevicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={Fevicon16} />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="page-wrapper" id="wrapper">
        {children}
      </div>
      <MobileNav />
      <SearchPopup />
    </div>
  );
};

export default Layout;
