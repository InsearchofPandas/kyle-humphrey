import React from "react";
import BackButtonAnim from "../utilities/BackButtonAnim";

export default function NeuWeather() {
  return (
    <div className="bg-bgColor pt-32 md:pt-48">
      <div className="w-full flex justify-center">
        <h2 className="text-2xl md:text-4xl  font-bold border-b border-gray-700 text-center">
          Neu Weather
        </h2>
      </div>
      <div className="w-full flex flex-wrap justify-center">
        <img
          src={require("../../images/code_stills/dark_mode_square.jpg")}
          className=" w-full md:w-5/12"
          alt="dark mode"
        />
        <p className=" thinFont text-center text-blue-300 w-full  py-2">
          Dark Mode
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center pb-4">
        <h3 className="w-full  p-2 md:w-7/12 text-2xl md:text-3xl">The App</h3>
        <p className="thinFont p-2 md:w-7/12">
          {" "}
          A weather App I am currently building in React Native. The
          Functionality of the App is based on that data returned from the Dark
          Sky API.
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center py-4">
        <h3 className="w-full  p-2 md:w-7/12 text-2xl md:text-3xl">
          The Design
        </h3>
        <p className="thinFont p-2 md:w-7/12">
          {" "}
          The design is based on the current trend of Numorphism or Soft UI. The
          trend has been criticized for its practicality and use of space.
          Weather Apps can potentially have a lot of data to display to the
          user. That made this a fun design challenge to attempt an elegant
          solution to.
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center py-10">
        <img
          src={require("../../images/code_stills/layout_wide_neu_weather_full.jpg")}
          className=" w-full md:w-10/12"
          alt="dark mode / light mode"
        />
        <p className="thinFont text-center text-blue-300 w-full py-2">
          Dark Mode / Light Mode
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center py-4">
        <h3 className="w-full  p-2 md:w-7/12 text-2xl md:text-3xl">
          The Process
        </h3>
        <div className="w-full flex justify-center flex-wrap pb-5">
          <p className="thinFont text-center text-blue-300 w-full py-2">
            wireframe
          </p>
          <img
            src={require("../../images/code_stills/neu_wireframe.jpg")}
            className="w-full md:w-8/12"
            alt="wireframe"
          />
        </div>
        <div className="w-full flex justify-center flex-wrap py-10">
          <p className="thinFont text-center text-blue-300 w-full py-2">
            drafting
          </p>
          <img
            src={require("../../images/code_stills/neu_stages.jpg")}
            className="w-full md:w-8/12"
            alt="drafts"
          />
        </div>
        <div className="w-full flex justify-center flex-wrap py-10">
          <p className="thinFont text-center text-blue-300 w-full py-2">
            visual functionality
          </p>
          <img
            src={require("../../images/code_stills/concept_frames.jpg")}
            className="w-full md:w-8/12"
            alt="visual functionality"
          />
        </div>
        <p className="thinFont p-2 md:w-7/12"> </p>
      </div>
      {/* ///////////////Bottom///////////////////// */}

      <div className="flex justify-center p-24 ">
        <div className="w-3/4">
          <BackButtonAnim />
        </div>
      </div>
    </div>
  );
}
