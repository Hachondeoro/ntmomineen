import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15585.364742104617!2d130.86917284963505!3d-12.42697294904677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cc09400ee055555%3A0x69e64131866bf318!2s5%2F74%20Winnellie%20Rd%2C%20Winnellie%20NT%200820!5e0!3m2!1sen!2sau!4v1711239622339!5m2!1sen!2sau"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;


