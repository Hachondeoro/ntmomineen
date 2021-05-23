import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";
import heartImage from "../../assets/images/shapes/heart-2-1.png";
import causeImage1 from "../../assets/images/causes/cause-1-1.jpg";
import causeImage2 from "../../assets/images/causes/cause-1-4.jpg";
import causeImage3 from "../../assets/images/causes/cause-1-3.jpg";

const CausesHomeData = [
  {
    image: causeImage1,
    progressCount: 23,
    raised: "25,270",
    goal: "30,000",
    title: "Our donation is hope for poor childrens",
    text: "Lorem Ipsum simply dummy text of printng and type industry.",
    link: "/cause-details"
  },
  {
    image: causeImage2,
    progressCount: 65,
    raised: "25,270",
    goal: "30,000",
    title: "Education for Poor Children",
    text: "Lorem Ipsum simply dummy text of printng and type industry.",
    link: "/cause-details"
  },
  {
    image: causeImage3,
    progressCount: 55,
    raised: "25,270",
    goal: "30,000",
    title: "Promoting The Rights of Children",
    text: "Lorem Ipsum simply dummy text of printng and type industry.",
    link: "/cause-details"
  }
];

const CausesHome = () => {
  const swiperParams = {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  };
  return (
    <section className="causes-page causes-home pt-120 pb-120">
      <Container>
        <Row className=" align-items-start align-items-md-center flex-column flex-md-row mb-60">
          <Col lg={7}>
            <div className="block-title">
              <p>
                <img src={heartImage} width="15" alt="" />
                Popular Causes
              </p>
              <h3>
                Donate to charity causes <br /> around the world.
              </h3>
            </div>
          </Col>
          <Col lg={5} className=" d-flex">
            <div className="my-auto">
              <p className="block-text pr-10 mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Have you done google research which works all the
                time.{" "}
              </p>
            </div>
          </Col>
        </Row>
        <Swiper {...swiperParams}>
          {CausesHomeData.map(
            (
              { image, progressCount, raised, goal, title, text, link },
              index
            ) => (
              <SwiperSlide key={`cause-card-key-${index}`}>
                <div className="cause-card">
                  <div className="cause-card__inner">
                    <div className="cause-card__image">
                      <img src={image} alt="" />
                    </div>
                    <div className="cause-card__content">
                      <div className="cause-card__top">
                        <div className="cause-card__progress">
                          <span
                            style={{ width: `${progressCount}%` }}
                            className="wow cardProgress"
                            data-wow-duration="1500ms"
                          >
                            <b>
                              <i>{progressCount}</i>%
                            </b>
                          </span>
                        </div>
                        <div className="cause-card__goals">
                          <p>
                            <strong>Raised:</strong> ${raised}
                          </p>
                          <p>
                            <strong>Goal:</strong> ${goal}
                          </p>
                        </div>
                      </div>
                      <h3>
                        <Link href={link}>
                          <a>{title}</a>
                        </Link>
                      </h3>
                      <p>{text}</p>
                      <div className="cause-card__bottom">
                        <Link href={link}>
                          <a className="thm-btn ">Donate Now</a>
                        </Link>
                        <Link href="#">
                          <a
                            className="cause-card__share"
                            aria-label="share postr"
                          >
                            <i className="azino-icon-share"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Container>
    </section>
  );
};

export default CausesHome;
