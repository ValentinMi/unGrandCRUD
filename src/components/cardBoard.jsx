import React, { Component } from "react";
import { mockingData } from "../services/mockingData";
import Card from "./commons/card";
import TopMenu from "./commons/topMenu";
import "../styles/cardBoard.css";

class CardBoard extends Component {
  state = {
    alcoolStories: []
  };

  componentDidMount() {
    this.setState({ alcoolStories: mockingData() });
  }

  render() {
    const { alcoolStories } = this.state;
    return (
      <React.Fragment>
        <TopMenu
          string="Mes elements"
          className="home-top-menu"
          btnProps={{
            string: "Ajouter",
            className: "btn btn-success btn-lg addBtn",
            path: "/new"
          }}
        />
        <div className="container-fluid card-cont">
          <div className="row grey-bckgrnd">
            {/* Map each story in an card */}
            {alcoolStories.map(story => (
              <div key={story.title} className="col-md-4 col-12">
                <Card story={story} />
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardBoard;
