import React from "react";
import { motion } from "framer-motion";

export default function HambugerAnimMenu({ toggle }) {
  const variants = {
    open: { y: [-73, 0, 0, 0], rotate: [0.33, 0.33, 0, 0] },
    closed: {
      y: [0, 0, 0, -73],
      rotate: [0, 0, 0, -33],
      transition: { duration: 0.33 },
    },
  };

  const variants2 = {
    open: { opacity: [0, 1, 1, 1] },
    closed: { y: [0, 73, 0], opacity: [1, 1, 0, 0, 0, 0] },
  };

  const variants3 = {
    open: { y: [73, 0, 0, 0], rotate: [-0.33, -0.33, 0, 0] },
    closed: {
      y: [0, 146, 73],
      rotate: [0, 0, 0, 33],
      transition: { duration: 0.33 },
    },
  };

  return (
    <div className="h-32 cursor-pointer">
      <motion.svg
        viewBox="0 0 270 188"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
          animate={toggle ? "closed" : "open"}
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
          animate={toggle ? "closed" : "open"}
          variants={variants2}
        />

        <motion.rect
          x="0"
          width="265"
          height="20"
          rx="8"
          fill="#FFFFFF"
          initial={false}
          animate={toggle ? "closed" : "open"}
          variants={variants3}
        />
      </motion.svg>
    </div>
  );
}
