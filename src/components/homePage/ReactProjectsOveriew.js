import React from "react";
import { Link } from "react-router-dom";
import CodeSketchModule from "./CodeSketchModule";
import FullAppModule from "./FullAppModule";
import ExerciseAppModule from "./ExerciseAppModule";
import codeSketches from "../../data/code_sketches_data.json";
import fullApps from "../../data/full_apps_data.json";
import exerciseApps from "../../data/exercise_apps_data.json";
import vanillaApps from "../../data/vanilla_apps_data.json";

function ReactProjectsOveriew() {
  return (
    <>
      <section id="react-projects-overview" className="bg-bgColor py-10 pb-16 ">
        <div className="w-full flex justify-center my-5 ">
          <div className="  flex  flex-wrap justify-center footerColor  pb-10">
            <div className="w-full  flex justify-center  ">
              <Link to="/work/coding">
                <h3 className="text-2xl md:text-4xl pt-10 mb-4 font-bold border-b border-gray-700">
                  React Projects
                </h3>
              </Link>
            </div>

            {/* Full  Applications bellow */}

            <div className="w-full  flex justify-center flex-wrap ">
              <h3 className=" text-2xl border-b border-gray-900 pt-4 ">
                Full Applications
              </h3>
              <p className="text-center text-sm md:text-lg thinFont w-full pt-2 pb-5">
                A collection of self directed design and coding projects
              </p>
            </div>

            <section className="pb-10 ">
              {fullApps.map((app) => (
                <FullAppModule
                  key={app.title}
                  title={app.title}
                  about={app.about}
                  link={app.link}
                  image_name={app.image}
                />
              ))}
            </section>

            {/* coding Exercises / Sketches bellow */}

            <div className="w-full  flex justify-center flex-wrap ">
              <h3 className=" text-2xl border-b border-gray-900 pt-4 ">
                Coding Sketches
              </h3>
              <p className="text-center text-sm md:text-lg thinFont w-full py-2">
                A collection of self directed and tutorial led applications /
                exercises to learn coding workflows, libraries, and techniques.
              </p>

              <div className="w-full flex md:px-10 flex  py-2 mb-10">
                {exerciseApps.map((app) => (
                  <ExerciseAppModule
                    image={app.image}
                    title={app.title}
                    key={app.title}
                    link={app.link}
                    about={app.about}
                  />
                ))}
              </div>

              <h3 className=" text-2xl border-b border-gray-900 pt-4 ">
                Vanilla JS Projects
              </h3>
              <p className="text-center text-sm md:text-lg thinFont w-full py-2">
                This section is composed of applications built with Javascript
                and not utilizing any JS frameworks
              </p>

              <div className="w-full flex md:px-10 flex  py-2 mb-10 flex-wrap">
                {vanillaApps.map((app) => (
                  <ExerciseAppModule
                    image={app.image}
                    title={app.title}
                    key={app.title}
                    link={app.link}
                    about={app.about}
                  />
                ))}
              </div>

              <h3 className=" text-2xl border-b border-gray-900 pt-4 ">
                Early React Apps
              </h3>
              <p className="text-center text-sm thinFont w-full py-2">
                Many projects below are not adaptive or responsive and can only
                be viewed accurately on a computer browser
              </p>
            </div>
            {codeSketches.map((sketch) => (
              <CodeSketchModule
                image={sketch.image}
                title={sketch.title}
                link={sketch.link}
                key={sketch.title}
              />
            ))}
          </div>
        </div>
        {/* <div className="flex justify-center ">
          <Link to="/work/coding">
            <button className="md:text-xl thinFont border border-gray-700 rounded py-1 px-2 hover:text-blue-700 m-2">
              See More
            </button>
          </Link>
        </div> */}
      </section>
    </>
  );
}

export default ReactProjectsOveriew;
