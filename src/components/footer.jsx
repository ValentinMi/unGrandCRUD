import React from "react";
import noc from "../img/noc.png";
import heart from "../img/heart.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="row">
      <div className="col footer-cont">
        <h2>
          Made with
          <img className="heart-logo" src={heart} alt="Love" />
          by
          <img className="noc-logo" src={noc} alt="Logo NoConsulting" />
        </h2>
      </div>
    </div>
  );
};

export default Footer;
