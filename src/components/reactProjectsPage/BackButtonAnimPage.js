import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function BackButtonAnim() {
  const [isHover, setHover] = useState(true);

    const hoverAnim = {
      hover: { x:  0 },
      notHover: { x:  -22,  transition:{yoyo: Infinity, duration: .4 }}
    }
  
  return (
    <div onMouseEnter={() => setHover(!isHover)} onMouseLeave={() => setHover(!isHover)}  className=" cursor-pointer border border-white rounded-lg flex justify-around items-center px-8 " >
    <motion.svg   initial={false}
    
   animate={isHover ? "hover" : "notHover"} variants={hoverAnim}  width="20" height="22" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M11 2L2 8L11 14" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </motion.svg>
    <p className="text-3xl pl-4 pr-4">BACK</p>
 </div>

  );
}

export const BackButtonAnimPage = () => {

  return (
    <div className="bg-bgColor pt-32 md:pt-48 h-screen">
      <div className="w-full flex justify-center">
        <h2 className="text-2xl md:text-4xl  font-bold border-b border-gray-700 text-center">
          Menu Animations
        </h2>
      </div>
      <div className="w-full flex flex-wrap justify-center pb-4">
        <h3 className="w-full  pt-8 px-2 md:w-7/12  text-xl md:text-2xl md:text-3xl">
          Smooth SVG Animation
        </h3>
        <p className="thinFont text-lg md:text-xl p-2 md:w-7/12">
          SVG drawn in Figma and then animated with the aid of the{" "}
          <a
            className=" text-xl md:text-2xl text-blue-400"
            href="https://github.com/InsearchofPandas/kyle-humphrey"
            target="_blank"
            rel="noopener noreferrer"
          >
            Framer Motion Libabry
          </a>
        </p>
      </div>
      <div className="w-full justify-center flex flex-wrap pt-8">
        <div className="p-48">


        <BackButtonAnim/>


        </div>
        <p className="w-full text-center thinFont text-xl">tap the bars!</p>
      </div>
    </div>
  );
};
