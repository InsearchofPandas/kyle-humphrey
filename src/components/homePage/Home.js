import React from "react";
import Splash from "./Splash";
import WorkOverview from "./WorkOverview";
import ReactProjectsOveriew from "./ReactProjectsOveriew";
import AboutMe from "./AboutMeOverview";
import FeatureFilmWork from "./FeatureFilmWork";

function Home() {
  return (
    <div className="h-screen">
      <Splash />
      <WorkOverview />
      <ReactProjectsOveriew />
      <FeatureFilmWork />
      <AboutMe />
    </div>
  );
}

export default Home;
