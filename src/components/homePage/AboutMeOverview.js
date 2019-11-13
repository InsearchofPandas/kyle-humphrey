import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="bg-bgColor py-10  border-b border-gray-700">
      <div className="w-full flex justify-center  ">
        <Link to="/aboutme">
          <h1 className="text-4xl  font-bold border-b border-gray-700">
            About Me
          </h1>
        </Link>
      </div>
      <div className="flex justify-center ">
        <Link to="/aboutme">
          <button className="text-xl thinFont border-b border-gray-700">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AboutMe;
