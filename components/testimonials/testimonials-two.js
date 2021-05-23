import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "../block-title";
import testimonialImage1 from "../../assets/images/testimonials/ali1.jpg";
import testimonialImage2 from "../../assets/images/testimonials/ibne1.jpg";
import testimonialImage3 from "../../assets/images/testimonials/frank1.jpg";

SwiperCore.use([Autoplay, Thumbs]);

const TESTIMONIALS_DATA = [
  {
    image: testimonialImage1,
    name: "Ali Dhirani",
    designation: "Community Leader",
    text:
      "NT has made so much for our community, \n I'm a firm believer this can make a large impact on everyone's lives"
  },
  {
    image: testimonialImage2,
    name: "Ibne Ali",
    designation: "Representative",
    text:
    "NT has made so much for our community, \n I'm a firm believer this can make a large impact on everyone's lives"
  },
  {
    image: testimonialImage3,
    name: "Frank Espinoza",
    designation: "Representative",
    text:
      "Best organization ever, 11/10 would join again."
  }
];

const TestimonialsTwo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const testimonialsThumbOptions = {
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 1400,
    autoplay: {
      delay: 5000
    }
  };
  const testimonialsOptions = {
    speed: 1400,
    mousewheel: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000
    }
  };
  return (
    <section className="testimonials-two">
      <Container>
        <div className="team-about__top">
          <Row className="align-items-center">
            <Col md={12} lg={7}>
              <BlockTitle
                title={`What they are talking \n about NT Mominee.`}
                tagLine="Our Testimonials"
              />
            </Col>
            <Col md={12} lg={5}>
              {/* <p className="team-about__top-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Have you done google research which works all the
                time.
              </p> */}
            </Col>
          </Row>
        </div>
        <Swiper
          id="testimonials-two__thumb"
          onSwiper={setThumbsSwiper}
          {...testimonialsThumbOptions}
        >
          {TESTIMONIALS_DATA.map(({ image, name }, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={name} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          id="testimonials-two__carousel"
          thumbs={{ swiper: thumbsSwiper }}
          {...testimonialsOptions}
        >
          {TESTIMONIALS_DATA.map(({ designation, name, text }, index) => (
            <SwiperSlide key={index}>
              <p>{text}</p>
              <div className="testimonials-two__meta">
                <h3>{name}</h3>
                <span>{designation}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default TestimonialsTwo;
