import React from "react";
import Joi from "joi-browser";
import ImageUploader from "react-images-upload";
// COMP
import Form from "./commons/form";
import TopMenu from "./commons/topMenu";
// IMG
import loadImg from "../img/loadImg.png";
// CSS
import "../styles/topMenu.css";
import "../styles/newStoryForm.css";

class NewStoryForm extends Form {
  state = {
    data: { title: "", img: "", author: "", quote: "" },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Titre"),
    img: Joi.array()
      .required()
      .label("Photo"),
    author: Joi.string()
      .required()
      .label("Auteur"),
    quote: Joi.string()
      .required()
      .label("Citation")
  };

  doSubmit = () => {
    const data = JSON.parse(localStorage.getItem("alcoolStories"));
    console.log(data);
  };

  onImgDrop = pic => {
    const data = { ...this.state.data };
    data.img = pic;
    this.setState({
      data: data
    });
  };

  render() {
    return (
      <React.Fragment>
        <TopMenu
          string="Ajouter un élément"
          className="col-6 new-form-top-menu"
          btnProps={{
            string: "Retour",
            className: "btn btn-danger btn-lg returnBtn",
            path: "/"
          }}
        />
        <div>
          <div className="container new-story-form-cont">
            <form className="new-story-form">
              {this.renderInput("title", "Titre", "Insérez votre titre")}
              <ImageUploader
                withIcon={false}
                buttonText={<img src={loadImg} alt="Upload img" />}
                buttonStyles={{ background: "none" }}
                onChange={this.onImgDrop}
                imgExtension={[".jpg", ".jpeg", ".png", ".gif"]}
              />
              {this.renderInput("author", "Auteur", "Citez l'auteur")}
              {this.renderTextArea(
                "quote",
                "Citation",
                "Insérez votre citation"
              )}
              {this.renderButton("Créer", "btn btn-success btn-lg submitBtn")}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewStoryForm;
