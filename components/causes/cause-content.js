import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import causeImage1 from "../../assets/images/causes/cause-d-1-1.jpg";
import comment1 from "../../assets/images/blog/comment-1-1.jpg";
import comment2 from "../../assets/images/blog/comment-1-2.jpg";
import organizer1 from "../../assets/images/causes/organizer-1-1.jpg";
import donor1 from "../../assets/images/causes/donor-1-1.jpg";
import donor2 from "../../assets/images/causes/donor-1-2.jpg";

const CauseContent = () => {
  return (
    <section className="cause-details blog-details  pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div className="cause-details__content">
              <div className="cause-card">
                <div className="cause-card__inner">
                  <div className="cause-card__image">
                    <img src={causeImage1} alt="" />
                  </div>
                  <div className="cause-card__content">
                    <div className="cause-card__top">
                      <div className="cause-card__progress">
                        <span
                          style={{ width: `66%` }}
                          className=" cardProgress"
                        >
                          <b>
                            <i>66</i>%
                          </b>
                        </span>
                      </div>
                      <div className="cause-card__goals">
                        <p>
                          <strong>Raised:</strong> $25,270
                        </p>
                        <p>
                          <strong>Goal:</strong> $30,000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3>Our donation is hope for poor childrens</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.{" "}
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
              <div className="cause-card__bottom">
                <a href="cause-details.html" className="thm-btn dynamic-radius">
                  Donate Now
                </a>

                <a href="#" className="cause-card__share">
                  <i className="azino-icon-share"></i>
                </a>
              </div>
              <div className="cause-details__presentations">
                <i className="fa fa-file-pdf"></i>
                <h3>Our Presentation</h3>
                <a href="#" className="thm-btn dynamic-radius">
                  Download
                </a>
              </div>
            </div>
            <h3 className="blog-details__title">Comments</h3>
            <div className="comment-one">
              <div className="comment-one__single">
                <img src={comment1} alt="" />
                <h3>Jessica Brown</h3>
                <p className="comment-one__date">20 May, 2020 . 4:00 pm</p>
                <p>
                  Lorem Ipsum is simply dummy free text of the available
                  printing and typesetting been the industry standard dummy text
                  ever sincer condimentum purus.
                </p>
                <a href="#" className="thm-btn dynamic-radius">
                  Reply
                </a>
              </div>
              <div className="comment-one__single">
                <img src={comment2} alt="" />
                <h3>Jessica Brown</h3>
                <p className="comment-one__date">20 May, 2020 . 4:00 pm</p>
                <p>
                  Lorem Ipsum is simply dummy free text of the available
                  printing and typesetting been the industry standard dummy text
                  ever sincer condimentum purus.
                </p>
                <a href="#" className="thm-btn dynamic-radius">
                  Reply
                </a>
              </div>
            </div>
            <h3 className="blog-details__title">Leave a comment</h3>
            <form
              action="#"
              className="contact-form-validated contact-page__form form-one mb-80"
            >
              <div className="form-group">
                <div className="form-control">
                  <input type="text" name="name" placeholder="Your Name" />
                </div>
                <div className="form-control">
                  <input type="text" name="email" placeholder="Email Address" />
                </div>
                <div className="form-control">
                  <input type="text" name="phone" placeholder="Phone Number" />
                </div>
                <div className="form-control">
                  <input type="text" name="subject" placeholder="Subject" />
                </div>
                <div className="form-control form-control-full">
                  <textarea
                    name="message"
                    placeholder="Write a Message"
                  ></textarea>
                </div>
                <div className="form-control form-control-full">
                  <button type="submit" className="thm-btn dynamic-radius">
                    Submit Comment
                  </button>
                </div>
              </div>
            </form>
            <div className="result"></div>
          </Col>
          <Col md={12} lg={4}>
            <div className="cause-details__sidebar">
              <div className="cause-details__organizer">
                <img src={organizer1} alt="" />
                <p>Created 20 May, 2020</p>
                <h3>
                  Organizer: <strong>Sarah Albert</strong>
                </h3>
                <ul className="list-unstyled cause-details__organizer-list">
                  <li>
                    <i className="fa fa-tag"></i>
                    <a href="#">Education</a>
                  </li>
                  <li>
                    <i className="fa fa-map-marker-alt"></i>
                    <a href="#">New York, USA</a>
                  </li>
                </ul>
              </div>
              <div className="cause-details__donations">
                <h4 className="cause-details__donations-title">Donations</h4>
                <ul className="list-unstyled cause-details__donations-list">
                  <li>
                    <img src={donor1} alt="" />
                    <p>$20</p>
                    <h3>
                      David Marks <span>3 hours ago</span>
                    </h3>
                    <span>God bless you dear</span>
                  </li>
                  <li>
                    <img src={donor2} alt="" />
                    <p>$20</p>
                    <h3>
                      David Marks <span>3 hours ago</span>
                    </h3>
                    <span>God bless you dear</span>
                  </li>
                  <li>
                    <img src={donor1} className="anonymus" alt="" />
                    <p>$20</p>
                    <h3>
                      Anonymus <span>3 hours ago</span>
                    </h3>
                    <span>God bless you dear</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CauseContent;
