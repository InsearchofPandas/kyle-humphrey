import React from "react";
import { withRouter } from "react-router-dom";

function ReactProjects({ location }) {
  return (
    <div className="bg-bgColor py-40 border-b border-gray-700 h-full">
      <div className="w-full flex justify-center  ">
        <h1 className="text-4xl  font-bold border-b border-gray-700">
          React Projects
        </h1>
      </div>
      <div className="flex justify-center ">
        <p> Here is some of my programing work</p>
      </div>
    </div>
  );
}

export default withRouter(ReactProjects);
