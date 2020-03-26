import React from "react";
import { motion } from "framer-motion";

export default function CodeSketchModule({ title, link, image }) {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className=" m-4 flex flex-wrap justify-center items-center w-32 md:w-48">
          <h3 className="w-full h-12 m-2  text-center text-xs md:text-base  flex  justify-center items-end hover:text-blue-700">
            {title}
          </h3>

          <div className=" h-32 md:h-48   w-32 md:w-48  relative">
            <motion.div
              whileHover={{ opacity: 0.8 }}
              className="h-32 md:h-48  w-32 md:w-48  bg-blue-800 w-full rounded-full absolute opacity-0"
            />
            <img
              className=" w-full rounded-full border-2 border-gray-600 boxShadow1 "
              src={require(`../../images/code_stills/${image}`)}
              alt={title}
            />
          </div>
        </div>
      </a>
    </>
  );
}
