import React from "react";
import { Switch } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import CardBoard from "./components/cardBoard";

function App() {
  return (
    <div className="container-fluid site-container">
      <Header />
      <Switch>
        <CardBoard />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
