import React, { Component } from "react";
import "../styles/cardBoard.css";

class CardBoard extends Component {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col ">
            <div className="add-cont">
              <h3>Mes elements</h3>
              <button className="btn btn-success btn-lg">Ajouter</button>
            </div>
          </div>
        </div>
        <div className="row" />
      </React.Fragment>
    );
  }
}

export default CardBoard;
