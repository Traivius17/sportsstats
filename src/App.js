import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewsPage from "./components/Pages/NewsPage";
import Player from "./components/Player";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import HomePage from "./components/Pages/HomePage";
import Standings from "./components/Standings";
import ContactUS from "./components/ContactUS";
import Profile from "./components/Profile";
import SignUpPage from "./components/Pages/SignUpPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/signup" exact component={SignUpPage} />
          <Route>
            <NavBar />
            <Route path="/" exact component={HomePage} />
            <Route path="/standings" component={Standings} />
            <Route path="/players" component={Player} />
            <Route path="/teams" component={Teams} />
            <Route path="/news" component={NewsPage} />
            <Route path="/contactus" component={ContactUS} />
            <Route path="/help" component={ContactUS} />
            <Route path="/profile" component={Profile} />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
