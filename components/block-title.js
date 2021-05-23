import React from "react";
import heart from "../assets/images/shapes/heart-2-1.png";

const BlockTitle = ({ tagLine, title }) => {
  return (
    <div className="block-title">
      <p>
        <img src={heart} width="15" alt="" />
        {tagLine}
      </p>
      <h3>{title}</h3>
    </div>
  );
};

export default BlockTitle;
