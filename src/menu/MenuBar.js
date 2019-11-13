import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import MenuButton from "./MenuButton";

const MenuBar = () => {
  const [isMenuBarToggled, setMenuBarToggle] = useState(false);

  const fadeMenuBar = useSpring({
    opacity: isMenuBarToggled ? 1 : 0
  });

  const hideMenuBar = () => {
    setMenuBarToggle(false);
  };

  return (
    <div
      onMouseEnter={() => setMenuBarToggle(true)}
      onMouseLeave={() => setMenuBarToggle(false)}
    >
      <div className=" flex items-center h-40 marginMenuBarText  right-0 marginMenuBarText fixed  z-50">
        <MenuButton hideMenuBar={hideMenuBar} />
      </div>
      <animated.div
        style={fadeMenuBar}
        className="flex justify-start h-40 items-center border-b border-gray-700 fixed w-full bgColorTransMed "
      >
        <div className="w-1/6 flex justify-center items-center marginMenuBarText">
          <Link to="/">
            <p className="text-white text-3xl text-outline ">[KYLE HUMPHREY]</p>
          </Link>
        </div>
      </animated.div>
    </div>
  );
};

export default MenuBar;
