import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./App.css";
import "./css/tailwind.css";
import "./css/standard.css";

import MenuBar from "./menu/MenuBar";
import Home from "./components/homePage/Home";
import AboutMe from "./components/aboutMePage/AboutMe";
import ReactProjects from "./components/reactProjectsPage/ReactProjects";
import FilmWork from "./components/filmWorkPage/FilmWork";

function App() {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  return (
    <Router>
      <animated.div className="h-screen" style={fade}>
        <MenuBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work/codeing" component={ReactProjects} />
          <Route path="/work/film-games" component={FilmWork} />
          <Route path="/aboutme" component={AboutMe} />
        </Switch>
      </animated.div>
    </Router>
  );
}

export default App;
