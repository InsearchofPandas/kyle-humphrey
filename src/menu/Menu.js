import React from "react";
import useLockBodyScroll from "../Hooks/useBodyScrollLock";
import { animated } from "react-spring";

import Portal from "../components/utilities/Portal";

const Menu = ({ animation, hideMenuBar, index }) => {
  useLockBodyScroll();

  return (
    <div onMouseEnter={hideMenuBar} key={index}>
      <animated.div
        style={animation}
        className="fixed w-full h-full top-0 left-0 bg-bgColor z-30 "
      ></animated.div>
    </div>
  );
};

export default Menu;
