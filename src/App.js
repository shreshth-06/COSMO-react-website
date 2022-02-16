import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Podcasts from "./components/pages/Podcasts";
import Submit from "./components/pages/Submit";
function App() {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <Router>
        <Navbar data={handleScroll} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/podcasts" component={Podcasts} />
          <Route path="/submit" component={Submit} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
