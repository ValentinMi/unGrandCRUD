import React from "react";
import "../../styles/card.css";

const Card = ({ story }) => {
  // Destructure storie
  const { title, imgSrc, quote, author } = story;
  return (
    <div className="card">
      <img src={imgSrc} alt="Boisson" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{quote}</p>
        <span>{author}</span>
        <button className="btn btn-primary">Modifier</button>
        <button className="btn btn-danger">Supprimer</button>
      </div>
    </div>
  );
};

export default Card;
