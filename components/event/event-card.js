import React from "react";
import Link from "next/link";
import moment from "moment";

const EventCard = ({ data }) => {
  const { image, title, date, time, location } = data;
  return (
    <div className="event-card">
      <div className="event-card-inner">
        <div className="event-card-image">
          <div className="event-card-image-inner">
            <img src={image.url} alt="" width="100%" />
            <span>{moment(date).format("MMMM Do")}</span>
            
          </div>
        </div>
        <div className="event-card-content">
          <h3>{title}</h3>
          <ul className="event-card-list">
            <li>
              <i className="azino-icon-clock"></i>
              <strong>Time:</strong> {time}
            </li>
            <li>
              <i className="azino-icon-pin1"></i>
              <strong>Location:</strong> {location}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
