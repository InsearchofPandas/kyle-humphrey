import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ExerciseAppModule({ image, title, link, about }) {
  return (
    <Link to={link}>
      <div className=" w-full md:px-12 max-w-xl">
        <p className="w-full text-center py-1">{title}</p>
        <div className="relative">
          <motion.div
            className="absolute w-full h-full opacity-0"
            whileHover={{ opacity: 1 }}
          >
            <div className="relative  flex justify-center items-center w-full h-full ">
              <div className="h-full w-full   bg-blue-800   absolute" />
              <p className="absolute">{about}</p>
            </div>
          </motion.div>
          <img
            className=" w-full border border-gray-700 boxShadow1"
            src={require(`../../images/code_stills/${image}`)}
            alt={title}
          />
        </div>
      </div>
    </Link>
  );
}
