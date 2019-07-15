import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./components/header";
import Footer from "./components/footer";
import CardBoard from "./components/cardBoard";
import NewStoryForm from "./components/newStoryForm";
import UpdateStoryForm from "./components/updateStoryForm";
import "./styles/slideAnim.css";

function App() {
  return (
    <div className="container-fluid site-container">
      <ToastContainer />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300}
              classNames="pageSlider"
            >
              <React.Fragment>
                <Header />
                <Switch>
                  <Route path="/" exact component={CardBoard} />
                  <Route path="/new" exact component={NewStoryForm} />
                  <Route path="/modify/:id" exact component={UpdateStoryForm} />
                  <Redirect to="/" />
                </Switch>
                <Footer />
              </React.Fragment>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}

export default App;
