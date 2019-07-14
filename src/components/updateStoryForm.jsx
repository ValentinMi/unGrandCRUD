import React from "react";
import Form from "./commons/form";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import ImageUploader from "react-images-upload";
import TopMenu from "./commons/topMenu";

class UpdateStoryForm extends Form {
  state = {
    storyId: "",
    data: { title: "", img: "", author: "", quote: "" },
    errors: {}
  };

  async componentDidMount() {
    await this.setState({ storyId: this.props.match.params.id });
    this.assignInputDefaultValue();
  }

  // Schema for Joi validation
  schema = {
    title: Joi.string().label("Titre"),
    img: Joi.string().label("Photo"),
    author: Joi.string().label("Auteur"),
    quote: Joi.string().label("Citation")
  };

  doSubmit = () => {
    // Get saved local data
    const localData = JSON.parse(localStorage.getItem("alcoolStories"));
    // Update the given story
    localData[this.state.storyId] = this.state.data;
    // Saved local data
    localStorage.setItem("alcoolStories", JSON.stringify(localData));
    // Redirect to home
    this.props.history.push("/");
    toast.info("Story modifiée");
  };

  // TO REWORK WITH BACKEND
  onImgDrop = () => {
    const data = { ...this.state.data };
    data.img = "imgSrc";
    this.setState({
      data: data
    });
  };

  assignInputDefaultValue = () => {
    const localData = JSON.parse(localStorage.getItem("alcoolStories"));
    const story = localData[this.state.storyId];
    if (story) {
      this.setState({ data: story });
    } else {
      this.props.history.push("/");
      toast.error("Story introuvable");
    }
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
              buttonText={<img src={this.state.data.img} alt="Upload img" />}
              buttonStyles={{ background: "none" }}
              onChange={this.onImgDrop}
              imgExtension={[".jpg", ".jpeg", ".png", ".gif"]}
            />
            {this.renderInput("author", "Auteur", "Citez l'auteur")}
            {this.renderTextArea("quote", "Citation", "Insérez votre citation")}
            {this.renderButton(
              "Modifier",
              "btn btn-success btn-lg submitBtn",
              "update"
            )}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default UpdateStoryForm;
