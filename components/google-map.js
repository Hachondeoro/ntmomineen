import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.102706454057!2d130.98740015007135!3d-12.509350991116953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cc0a2e56aa59b29%3A0x2e14d4ed05bdba10!2s174%20Forrest%20Parade%2C%20Rosebery%20NT%200832!5e0!3m2!1sen!2sau!4v1621761257678!5m2!1sen!2sau"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
