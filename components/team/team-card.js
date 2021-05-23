import React from "react";

const TeamCard = ({ extraClass, image, name, designation }) => {
  return (
    <div className={`team-card text-center ${extraClass}`}>
      <div className="team-card__image">
        <img src={image} alt="" />
      </div>
      <div className="team-card__social">
        <a href="#" aria-label="twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="facebook">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="#" aria-label="pinterest">
          <i className="fab fa-pinterest-p"></i>
        </a>
        <a href="#" aria-label="instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="team-card__content">
        <h3>{name}</h3>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default TeamCard;
