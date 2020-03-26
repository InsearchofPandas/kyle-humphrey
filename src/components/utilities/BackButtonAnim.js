import React, { useState } from "react";

import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

export default function BackButtonAnim({ text = "BACK" }) {
  const [isHover, setHover] = useState(true);
  const history = useHistory();

  const hoverAnim = {
    hover: { x: 0 },
    notHover: { x: -22, transition: { yoyo: Infinity, duration: 0.4 } },
  };

  return (
    <button
      type="submit"
      onMouseEnter={() => setHover(!isHover)}
      onMouseLeave={() => setHover(!isHover)}
      onClick={() => history.goBack()}
      className=" w-48 cursor-pointer border border-white rounded-lg flex justify-around items-center px-8 cinzel"
    >
      <motion.svg
        initial={false}
        animate={isHover ? "hover" : "notHover"}
        variants={hoverAnim}
        width="20"
        height="22"
        viewBox="0 0 13 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 2L2 8L11 14"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
      <p className="text-3xl pl-4 pr-4">{text}</p>
    </button>
  );
}
