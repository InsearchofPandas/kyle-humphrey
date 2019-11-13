import React from "react";
import { withRouter } from "react-router-dom";

function FilmWork({ location }) {
  console.log();
  return (
    <div className="bg-bgColor py-40 border-b border-gray-700 h-full">
      <div className="w-full flex justify-center  ">
        <h1 className="text-4xl  font-bold border-b border-gray-700">
          Film Work
        </h1>
      </div>
      <div className="flex justify-center ">
        <p className="text-xl thinFont border-b border-gray-700">
          Here is some of the work I have done fore feature films and games.
          {location.pathname}
        </p>
      </div>
    </div>
  );
}

export default withRouter(FilmWork);
