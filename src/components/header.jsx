import React from "react";
import glass from "../img/wine-glass.png";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="row">
      <div className="col header-cont">
        <h1>
          Un grand CRUD
          <img className="wine-glass" src={glass} alt="Wine glass" />
        </h1>
        <div className="lign" />
      </div>
    </div>
  );
};

export default Header;
