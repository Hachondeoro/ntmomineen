import React from "react";
import Link from "next/link";
import moment from "moment";

const EventCard = ({ data }) => {
  const { image, title, date, time, location } = data;
  return (
    <div className="event-card">
      <div className="event-card-inner">
        <div className="event-card-content">
          <div className="bodyEvent"><h3>{title}</h3>
            <ul className="event-card-list">
              <li>
                <i className="azino-icon-clock" />
                <strong>Time:</strong> {time}
              </li>
              <li>
                <i className="azino-icon-pin1" />
                <strong>Location:</strong> {location}
              </li>
            </ul>
          </div>
          <div className="event-card-image-inner">
            <img src={image.url} alt="" width="100%" className="imageEvent"/>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
