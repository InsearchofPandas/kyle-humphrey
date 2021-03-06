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
import WordFinder from "./components/reactProjectsPage/WordFinder";
import Validator from "./components/reactProjectsPage/Validator";
import KyleHumphrey from "./components/reactProjectsPage/KyleHumphrey";
import InfiniteScroll from "./components/reactProjectsPage/InfiniteScroll";
import TheaterPicker from "./components/reactProjectsPage/TheaterPicker";
import VideoLandingPage from "./components/reactProjectsPage/VideoLandingPage";
import LoadingBars from "./components/reactProjectsPage/LoadingBars";
import PictureBay from "./components/reactProjectsPage/PictureBay";

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
            <Route
              exact
              path="/work/coding/word-finder"
              component={WordFinder}
            />
            <Route
              exact
              path="/work/coding/form-validator"
              component={Validator}
            />
            <Route
              exact
              path="/work/coding/infinite-scroll"
              component={InfiniteScroll}
            />
            <Route
              exact
              path="/work/coding/theater-picker"
              component={TheaterPicker}
            />
            <Route
              exact
              path="/work/coding/video-landing"
              component={VideoLandingPage}
            />
            <Route
              exact
              path="/work/coding/loading-bars"
              component={LoadingBars}
            />
            <Route
              exact
              path="/work/coding/picture-bay"
              component={PictureBay}
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
