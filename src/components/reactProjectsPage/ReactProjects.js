import React from "react";
import { withRouter } from "react-router-dom";
import CodeSketchModule from "../homePage/CodeSketchModule";
import FullAppModule from "../homePage/FullAppModule";
import codeSketches from "../../data/code_sketches_data.json";
import fullApps from "../../data/full_apps_data.json";
import BackButtonAnim from "../utilities/BackButtonAnim";

function ReactProjects({ location }) {
  return (
    <div className="bg-bgColor py-32  md:py-20 border-b border-gray-700 ">
      <div className="w-full flex justify-center  ">
        <h2 className="text-2xl md:text-4xl  font-bold border-b border-gray-700 text-center">
          React Projects
        </h2>
      </div>
      <div className="flex justify-center pt-12 ">
        <body className="  flex  flex-wrap justify-center footerColor  border border-gray-900 pb-6">
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
          {/* coding Sketches bellow */}

          <div className="w-full  flex justify-center flex-wrap ">
            <h3 className=" text-2xl border-b border-gray-900 pt-4 ">
              Coding Sketches
            </h3>
            <p className="text-center text-sm thinFont w-full py-2">
              A collection of self directed unpolished applications to learn
              coding workflows, libraries, and techniques.
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
        </body>
      </div>
{" "}
      {/* ///////////////Bottom///////////////////// */}
      <div className="flex justify-center p-24 ">
        <div className="w-3/4">
          <BackButtonAnim />
        </div>
      </div>
    </div>
  );
}

export default withRouter(ReactProjects);
