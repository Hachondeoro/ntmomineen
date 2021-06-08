import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";

import banner1 from "../../assets/images/main-slider/background1.jpg";
import banner2 from "../../assets/images/main-slider/background3.jpg";

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const MainSlider = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <section className="main-slider">
      <Swiper {...mainSlideOptions}>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner1})` }}
          ></div>

          <Container>
            <Row className="row justify-content-end">
              <Col xl={7} lg={12} className="text-right">
                <h2>
                  Northern Territory <br /> Momineen Incorporated
                </h2>
                <Link href="/donations">
                  <a
                    className="scroll-to-target thm-btn"
                    data-target=".donate-options"
                  >
                    Donate Now
                  </a>
                </Link>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner2})` }}
          ></div>

          <Container>
            <Row className="row justify-content-end">
              <Col xl={8} lg={12} className="text-right">
                <h2>
                  Northern Territory <br /> Momineen Incorporated
                </h2>
                <Link href="/donations">
                  <a
                    className="scroll-to-target thm-btn"
                    data-target=".donate-options"
                  >
                    Donate Now
                  </a>
                </Link>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner1})` }}
          ></div>

          <Container>
            <Row className="justify-content-end">
              <Col lg={7} className=" text-right">
                <h2>
                  Northern Territory <br /> Momineen Incorporated
                </h2>
                <Link href="/donations">
                  <a
                    className="scroll-to-target thm-btn"
                    data-target=".donate-options"
                  >
                    Donate Now
                  </a>
                </Link>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <div className="swiper-pagination" id="main-slider-pagination"></div>
      </Swiper>
    </section>
  );
};

export default MainSlider;
