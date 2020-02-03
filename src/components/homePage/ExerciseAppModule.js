import React from "react";
import { Link } from "react-router-dom";

export const ExerciseAppModule = ({ image, title, link, about }) => {
  return (
    <Link to={link}>
      <div className="w-full md:w-1/4 flex justify-center flex-wrap ">
        <p className="w-full text-center py-1">{title}</p>
        <img
          className=" w-full border border-gray-700 boxShadow1"
          src={require(`../../images/code_stills/${image}`)}
          alt={title}
        />
      </div>
    </Link>
  );
};
