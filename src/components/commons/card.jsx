import React from "react";
import "../../styles/card.css";

const Card = ({ story, onDelete }) => {
  // Destructure storie
  const { title, imgSrc, quote, author } = story;
  return (
    <div className="col-md-4 col-12">
      <div className="card">
        <img src={imgSrc} alt="Boisson" />
        <span className="story-title">{title}</span>
        <div className="card-body">
          <h3 className="card-title">Citation</h3>
          <h4 className="card-text">"{quote}"</h4>
          <h4 className="card-author">{author}</h4>
          <div className="row card-btn-cont">
            <button className="btn btn-primary btn-lg card-btn">
              Modifier
            </button>
            <button
              onClick={() => onDelete()}
              className="btn btn-danger btn-lg card-btn"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
