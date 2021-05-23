import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import PostPaginations from "../post-paginations";

import causeImage1 from "../../assets/images/causes/cause-1-1.jpg";
import causeImage2 from "../../assets/images/causes/cause-1-2.jpg";
import causeImage3 from "../../assets/images/causes/cause-1-3.jpg";
import causeImage4 from "../../assets/images/causes/cause-1-4.jpg";
import causeImage5 from "../../assets/images/causes/cause-1-5.jpg";
import causeImage6 from "../../assets/images/causes/cause-1-6.jpg";
const CAUSES_DATA = [
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
  },
  {
    image: causeImage4,
    progressCount: 23,
    raised: "25,270",
    goal: "30,000",
    title: "Our donation is hope for poor childrens",
    text: "Lorem Ipsum simply dummy text of printng and type industry.",
    link: "/cause-details"
  },
  {
    image: causeImage5,
    progressCount: 65,
    raised: "25,270",
    goal: "30,000",
    title: "Education for Poor Children",
    text: "Lorem Ipsum simply dummy text of printng and type industry.",
    link: "/cause-details"
  },
  {
    image: causeImage6,
    progressCount: 55,
    raised: "25,270",
    goal: "30,000",
    title: "Promoting The Rights of Children",
    text: "Lorem Ipsum simply dummy text of printng and type industry.",
    link: "/cause-details"
  }
];

const CausesPage = () => {
  return (
    <section className="causes-page pt-120 pb-120">
      <Container>
        <div className="causes-col__3">
          {CAUSES_DATA.map(
            (
              { image, progressCount, raised, goal, title, text, link },
              index
            ) => (
              <div className="cause-card" key={`cause-card-key-${index}`}>
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
            )
          )}
        </div>
        <PostPaginations />
      </Container>
    </section>
  );
};

export default CausesPage;
