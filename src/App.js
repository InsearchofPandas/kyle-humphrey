import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import { useSpring, animated } from "react-spring";
import "./App.css";
import "./css/tailwind.css";
import "./css/standard.css";
import MenuBar from "./components/menu/MenuBar";
import Home from "./components/homePage/Home";
import AboutMe from "./components/aboutMePage/AboutMe";
import ReactProjects from "./components/reactProjectsPage/ReactProjects";
import FilmWork from "./components/filmWorkPage/FilmWork";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactPage";
import NeuWeather from "./components/reactProjectsPage/NeuWeather";
import MenuAnim from "./components/reactProjectsPage/MenuAnim";
import TriviaGame from "./components/reactProjectsPage/TriviaGame";
import KyleHumphrey from "./components/reactProjectsPage/KyleHumphrey";

require("dotenv").config();

function App() {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  return (
    <Router>
      <animated.div className="h-screen" style={fade}>
        <MenuBar />
        <Switch>
          <ScrollToTop>
            <Route exact path="/" component={Home} />
            <Route exact path="/work/coding" component={ReactProjects} />
            <Route
              exact
              path="/work/coding/kyle-humphrey"
              component={KyleHumphrey}
            />
            <Route
              exact
              path="/work/coding/neu-weather"
              component={NeuWeather}
            />
            <Route
              exact
              path="/work/coding/menu-animation"
              component={MenuAnim}
            />
            <Route
              exact
              path="/work/coding/trivia-game"
              component={TriviaGame}
            />

            <Route path="/work/film-games" component={FilmWork} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/contact" component={ContactForm} />
          </ScrollToTop>
        </Switch>
        <Footer />
      </animated.div>
    </Router>
  );
}

export default App;
