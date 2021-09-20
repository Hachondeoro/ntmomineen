import "bootstrap/dist/css/bootstrap.min.css";
import App from "next/app";
import React from "react";
import TagManager from "react-gtm-module";
import "react-modal-video/css/modal-video.min.css";
import "swiper/swiper-bundle.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/azino-icons.css";
import "../assets/css/custom.scss";
import "../assets/css/fontawesome-all.min.css";
import "../assets/css/main.css";
import "../assets/css/react-tabs.css";
import "react-image-gallery/styles/scss/image-gallery.scss";


export default class MyApp extends App {
  componentDidMount() {
    TagManager.initialize({
      gtmId: "GTM-PM3WHZK",
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
