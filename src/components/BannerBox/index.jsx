import React from "react";
import { Link } from "react-router-dom";

const BannerBox = (props) => {
  return (
    <div className="group rounded-lg overflow-hidden box bannerBox">
      <Link to={"/"}>
        <img
          src={props.img}
          alt={props.alt}
          className="w-full group-hover:rotate-1 group-hover:scale-105 transition-all"
        />
      </Link>
    </div>
  );
};

export default BannerBox;
