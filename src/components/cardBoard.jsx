import React, { Component } from "react";
import Card from "./commons/card";
import { mockingData } from "../services/mockingData";

import "../styles/cardBoard.css";

class CardBoard extends Component {
  state = {
    // Initals stories
    alcoolStories: []
  };

  componentDidMount() {
    console.log(mockingData());
    this.setState({ alcoolStories: mockingData() });
  }

  render() {
    console.log(this.state.alcoolStories);
    const { alcoolStories } = this.state;
    return (
      <React.Fragment>
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
