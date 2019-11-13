import React, { useRef } from "react";
import useLockBodyScroll from "../Hooks/useBodyScrollLock";
import { animated, useSpring, useTransition, useChain } from "react-spring";

import Portal from "../components/utilities/Portal";

const Menu = ({ closeModal, animation, hideMenuBar, isMenuToggled }) => {
  useLockBodyScroll();

  return (
    <div onMouseEnter={hideMenuBar}>
      <Portal>
        <animated.div
          style={animation}
          className="fixed w-full h-full top-0 left-0 bg-bgColor z-30 "
        ></animated.div>
      </Portal>
    </div>
  );
};

export default Menu;
