import React from "react";
import { withRouter } from "react-router-dom";
import Imagesviewer from "./ImagesViewer";
import BackButtonAnim from "../utilities/BackButtonAnim";

const images = [
  "peter_parker.jpg",
  "spiderman.jpg",
  "spiderCar.jpg",
  "sandCastel.jpg",
  "dog.jpg",
  "sylv.jpg",
  "bolvar_close.jpg",
  "wide_bolvar.jpg",
  "frozen.jpg",
  "anna.jpg",
  "sanFran.jpg",
  "baymax.jpg",
];

function FilmWork({ location }) {
  const vimeoPlayerStyle = {
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  };
  return (
    <div className="w-full bg-bgColor py-32  md:py-20 border-b border-gray-700 ">
      <div className="w-full flex justify-center  ">
        <h2 className="text-2xl md:text-4xl  font-bold border-b border-gray-700 text-center">
          Feature Film And Games
        </h2>
      </div>
      <section className="flex justify-center content-start">
        <div className="px-4 w-full h-webplayer max-h-webplayer md:py-10">
          <iframe
            title="reel"
            src="https://player.vimeo.com/video/343857146"
            style={vimeoPlayerStyle}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      </section>
      <section className="w-full flex flex-wrap justify-center   ">
        <h3 className="w-full thinFont text-xl p-2 text-center  ">
          Computer generated animation is where science meets art.
        </h3>
        <p className="w-full thinFont text-xl p-2 text-center  ">
          3D animation is made by the handling and manipulation of enormous
          amounts of data with the coordination and control of an artist’s
          brush.
        </p>
        <div className=" w-11/12 lg:w-8/12 flex justify-center py-6">
          <Imagesviewer images={images} />
        </div>

        <h3 className="w-full text-xl py-1 pt-10 text-center  ">The Process</h3>
        <p className="w-full p-2 pb-10 md:w-10/12 thinFont  text-xl  text-center  ">
          Creating a 3D animated film requires the organization of mass amounts
          of data. This data needs to be procedurally manipulated so that
          artistic treatments can be applied on a frame by frame basis. Data
          undergoes several transformations, ultimately becoming the refined
          output images that make up each individual frame of animation. A
          lighting artist and technical director achieve this primally by first
          creating a visual aesthetic for the image and then constructing logic
          to manipulate data to produce the desired look. This is primarily done
          with software that aids in visual node-based programming. Multiple
          function modules are arranged into complex logic webs that modify the
          original inputted data. The results are artistically modified output
          images that are combined to create the illusion of animation.
          Traditional programming and scripting skills are utilized for
          uninhibited control of the data.
        </p>
        <div className="w-full md:w-10/12 flex flex-row  items-start flex-wrap px-1 pb-10">
          <img
            className="w-1/3 "
            alt="frame 1"
            src={require("../../images/frame_by_frame/dive_bomb_0001.jpg")}
          />
          <img
            className="w-1/3 h-auto  "
            alt="frame 1"
            src={require("../../images/frame_by_frame/dive_bomb_0002.jpg")}
          />
          <img
            className="w-1/3 h-auto  "
            alt="frame 1"
            src={require("../../images/frame_by_frame/dive_bomb_0003.jpg")}
          />
          <img
            className="w-1/3 h-auto  "
            alt="frame 1"
            src={require("../../images/frame_by_frame/dive_bomb_0004.jpg")}
          />
          <img
            className="w-1/3 h-auto  "
            alt="frame 1"
            src={require("../../images/frame_by_frame/dive_bomb_0005.jpg")}
          />
          <img
            className="w-1/3 h-auto  "
            alt="frame 1"
            src={require("../../images/frame_by_frame/dive_bomb_0006.jpg")}
          />
          <img
            className="w-1/3 h-auto  "
            alt="frame 1"
            src={require("../../images/frame_by_frame/dive_bomb_0007.jpg")}
          />
          <img
            className="w-1/3 h-auto  "
            alt="frame 1"
            src={require("../../images/frame_by_frame/dive_bomb_0008.jpg")}
          />
          <img
            className="w-1/3 h-auto  "
            alt="frame 1"
            src={require("../../images/frame_by_frame/dive_bomb_0009.jpg")}
          />
        </div>

        <h3 className="w-full text-xl py-1 text-center  ">
          My Areas of Specialization
        </h3>
        <p className="w-full p-2 md:w-10/12 thinFont  text-xl  text-center  ">
          <span className="heavyFont">
            Lighting and Look Development Artists
          </span>
          &nbsp; are responsible for taking direction from the director and
          concept artwork from the art director and then crafting the final
          visual aesthetics and image output for the film. The job is a balance
          between traditional artistry and engineering. An artist must not only
          create the visual image, but they must also construct dynamic
          technical rigs that manipulate data to achieve the results in
          animation. Being responsible for all the final images that appear in
          the film gives the lighting artist the ability to set the visual mood
          and emotional tone of a movie. Understanding the story the director is
          trying to tell the audience is crucial for conveying the right meaning
          through the images created. The artist must empathetically imagine how
          the audience will interpret every creative decision they make.
        </p>
        <p className="w-full p-2 md:w-10/12 thinFont  text-xl  text-center  ">
          <span className="heavyFont">Technical Director</span> – Data
          management is crucial for feature film computer animation. There is a
          rigid pipeline put together by engineers to enable this process. A
          technical director is the bridge between the artists and the engineers
          who handle technical difficulties. These problems arise within the
          pipeline that has been built to achieve the desired artistic look in a
          fast-paced environment with very tight deadlines.
        </p>
      </section>
      {/* ///////////////Bottom///////////////////// */}

      <div className="flex justify-center p-24 ">
        <div className="w-3/4">
          <BackButtonAnim />
        </div>
      </div>
    </div>
  );
}

export default withRouter(FilmWork);
