import React from "react";
import Form from "./commons/form";
import Joi from "joi-browser";
import ImageUploader from "react-images-upload";
import TopMenu from "./commons/topMenu";

class UpdateStoryForm extends Form {
  state = {
    storyId: "",
    data: { title: "", img: "", author: "", quote: "" },
    errors: {}
  };

  // Schema for Joi validation
  schema = {
    title: Joi.string()
    .label("Titre"),
    img: Joi.array()
    .label("Photo"),
    author: Joi.string()
    .label("Auteur"),
    quote: Joi.string()
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
          string="Modifier un élément"
          className="col-6 new-form-top-menu"
          btnProps={{
            string: "Retour",
            className: "btn btn-danger btn-lg returnBtn",
            path: "/"
          }}
        />
        <div className="container new-story-form-cont">
          <form className="new-story-form">
            {this.renderInput("title", "Titre", "Insérez votre titre")}
            <ImageUploader
              withIcon={false}
              buttonText={<img src={""} alt="Upload img" />}
              buttonStyles={{ background: "none" }}
              onChange={this.onImgDrop}
              imgExtension={[".jpg", ".jpeg", ".png", ".gif"]}
            />
            {this.renderInput("author", "Auteur", "Citez l'auteur")}
            {this.renderTextArea("quote", "Citation", "Insérez votre citation")}
            {this.renderButton("Créer", "btn btn-success btn-lg submitBtn")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default UpdateStoryForm;
