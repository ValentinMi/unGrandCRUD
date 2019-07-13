import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import CardBoard from "./components/cardBoard";

function App() {
  return (
    <div className="container-fluid site-container">
      <Header />
      <Switch>
        <Route path="/" exact component={CardBoard} />
        {/* <Route path="/new" exact component={StoryForm} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
