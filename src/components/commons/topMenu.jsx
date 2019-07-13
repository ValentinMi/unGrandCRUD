import React from "react";
import { Link } from "react-router-dom";
import "../../styles/topMenu.css";

const TopMenu = ({ btnProps, string, className }) => {
  return (
    <div className="row">
      <div className={"col " + className}>
        <h1>{string}</h1>
        <Link to={btnProps.path} className={btnProps.className}>
          {btnProps.string}
        </Link>
      </div>
    </div>
  );
};

export default TopMenu;
