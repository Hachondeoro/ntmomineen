import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.292470696766!2d130.88801091538252!3d-12.430223391212673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cc096a7ab572fd5%3A0xbd2514036058e093!2s143%20Coonawarra%20Rd%2C%20Winnellie%20NT%200820!5e0!3m2!1sen!2sau!4v1648436051482!5m2!1sen!2sau"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;


