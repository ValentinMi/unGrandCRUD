import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
        <Route path="/modify/:id" exact component={UpdateStoryForm} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
