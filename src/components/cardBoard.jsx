import React, { Component } from "react";
import Card from "./commons/card";
// IMG
import absolute from "../img/absolute.jpeg";
import beer from "../img/beer.jpg";
import water from "../img/water.jpeg";
// CSS
import "../styles/cardBoard.css";

class CardBoard extends Component {
  state = {
    // Initals stories
    alcoolStories: []
  };

  componentDidMount() {
    this.getLocalData();
  }

  getLocalData = () => {
    // Try to get data from localStorage
    const dataSave = localStorage.getItem("alcoolStories");
    if (dataSave === null) {
      // If null set intial state
      this.setState({
        alcoolStories: [
          {
            title: "Absolut",
            imgSrc: absolute,
            quote:
              "L'alcool est la réponse. Je ne me rapelle plus de la question",
            author: "Valentin Misiaszek"
          },
          {
            title: "UPD",
            imgSrc: beer,
            quote: "Une petite dernière ? ",
            author: "Valentin Misiaszek"
          },
          {
            title: "Lendemain",
            imgSrc: water,
            quote: "J'adore l'eau...",
            author: "JCVD"
          }
        ]
      });
    } else {
      // If data, assign it as state
      this.setState({ alcoolStories: dataSave });
    }
  };

  render() {
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
