import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

function HambugerAnimMenu() {
  const [isOpen, setIsOpen] = useState(true);

  const variants = {
    open: { y: [-73, 0, 0, 0], rotate: [0.33, 0.33, 0, 0] },
    closed: {
      y: [0, 0, 0, -73],
      rotate: [0, 0, 0, -33],
      transition: { duration: 0.33 }
    }
  };

  const variants2 = {
    open: { opacity: [0, 1, 1, 1] },
    closed: { y: [0, 73, 0], opacity: [1, 1, 0, 0, 0, 0] }
  };

  const variants3 = {
    open: { y: [73, 0, 0, 0], rotate: [-0.33, -0.33, 0, 0] },
    closed: {
      y: [0, 146, 73],
      rotate: [0, 0, 0, 33],
      transition: { duration: 0.33 }
    }
  };

  return (
    <div>
      <motion.svg
        viewBox="0 0 270 188"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.025 }}
      >
        <motion.rect
          x="0"
          y="146"
          width="265"
          height="20"
          rx="8"
          fill="#FFFFFF"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        />

        <motion.rect
          x="0"
          y="73.0001"
          width="265"
          height="20"
          rx="8"
          fill="#FFFFFF"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={variants2}
        />

        <motion.rect
          x="0"
          width="265"
          height="20"
          rx="8"
          fill="#FFFFFF"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={variants3}
        />
      </motion.svg>
    </div>
  );
}

export const MenuAnim = () => {
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
            href="https://www.framer.com/motion/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Framer Motion Libabry
          </a>
        </p>
      </div>
      <div className="w-full justify-center flex flex-wrap pt-8">
        <div className="w-1/2 md:w-1/6">
          <HambugerAnimMenu />
        </div>
        <p className="w-full text-center thinFont text-xl">tap the bars!</p>
      </div>
      <div className="w-full flex flex-wrap justify-center pb-8 border-b border-gray-700">
        <p className="thinFont text-lg md:text-xl p-2 md:w-7/12">
          See the{" "}
          <a
            className=" text-xl md:text-2xl text-blue-400"
            href="https://github.com/InsearchofPandas/kyle-humphrey/blob/master/src/components/utilities/HambugerAnimMenu.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </p>
      </div>
      
    </div>
  );
};
