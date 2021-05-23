import React, { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { Container } from "react-bootstrap";
import bgImage from "../../assets/images/backgrounds/page-header-1-1.jpg";
import heart from "../../assets/images/shapes/heart-2-1.png";

const VideoCard = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="video-card">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
      <div
        className="video-card__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <Container className=" text-center pt-120 pb-120">
        <p>
          <img src={heart} width="15" alt="" />
          Help Other People
        </p>
        <h3>
          Our fingerprints on the <br />
          lives we touch never fade.
        </h3>
        <div className="video-card__btn-block">
          <Link href="/cause-details">
            <a className="thm-btn dynamic-radius">Start Donating</a>
          </Link>

          <span
            onClick={() => setOpen(true)}
            className="video-popup video-card__btn"
          >
            <i className="fa fa-play"></i>
          </span>
        </div>
      </Container>
    </section>
  );
};

export default VideoCard;
