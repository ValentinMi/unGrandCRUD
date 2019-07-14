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

  componentDidUpdate(prevState) {
    if (this.state.alcoolStories !== prevState.alcoolStories) {
      const data = JSON.stringify(this.state.alcoolStories);
      localStorage.setItem("alcoolStories", data);
    }
  }

  handleDelete = index => {
    const { alcoolStories } = this.state;
    let stories = [...alcoolStories];
    stories.splice(index, 1);
    this.setState({ alcoolStories: stories });
  };

  render() {
    const { alcoolStories } = this.state;
    return (
      <React.Fragment>
        <TopMenu
          string="Mes éléments"
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
            {alcoolStories.map((story, index) => (
              <Card
                index={index}
                key={story.title}
                story={story}
                onDelete={this.handleDelete.bind(this, index)}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardBoard;
