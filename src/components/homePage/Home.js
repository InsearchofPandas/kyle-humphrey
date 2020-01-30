import React from "react";
import Splash from "./Splash";
import WorkOverview from "./WorkOverview";
import ReactProjectsOveriew from "./ReactProjectsOveriew";
import AboutMe from "./AboutMeOverview";
import FeatureFilmWork from "./FeatureFilmWorkOverview";
import ContactForum from "../ContactForum";

function Home() {
  return (
    <div>
      <Splash />
      <WorkOverview />
      <ReactProjectsOveriew />
      <FeatureFilmWork />
      <AboutMe />
      <ContactForum />
    </div>
  );
}

export default Home;
