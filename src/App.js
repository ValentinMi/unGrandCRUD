import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/header";
import Footer from "./components/footer";
import CardBoard from "./components/cardBoard";
import NewStoryForm from "./components/newStoryForm";
import UpdateStoryForm from "./components/updateStoryForm";

function App() {
  return (
    <div className="container-fluid site-container">
      <ToastContainer />
      <Header />
      <Switch>
        <Route path="/" exact component={CardBoard} />
        <Route path="/new" exact component={NewStoryForm} />
        <Route path="/modify" exact component={UpdateStoryForm} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
