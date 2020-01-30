import React from "react";

import { animated } from "react-spring";

const Menu = ({ animation, isMenuToggled }) => {
  return (
    <>
      <animated.div
        style={animation}
        className={
          "fixed w-full h-full top-0 left-0 bg-bgColor z-30 " +
          (isMenuToggled ? "z-30" : "z--10")
        }
      ></animated.div>
    </>
  );
};

export default Menu;
