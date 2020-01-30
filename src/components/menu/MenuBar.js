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
    <>
      <nav
        onMouseEnter={() => setMenuBarToggle(true)}
        onMouseLeave={() => setMenuBarToggle(false)}
      >
        <div className=" flex items-center h-32 md:h-40 marginMenuBarText  right-0 marginMenuBarText fixed  z-50">
          <MenuButton hideMenuBar={hideMenuBar} />
        </div>
        <animated.div
          style={fadeMenuBar}
          className="flex justify-start h-32 md:h-40 items-center border-b border-gray-700 fixed w-full bgColorTransMed "
        >
          <div className=" w-2/3 md:w-1/6 flex md:justify-center items-center marginMenuBarText">
            <Link to="/">
              <h1 className="text-white sm:text-sm md:text-2xl ">
                [KYLE HUMPHREY]
              </h1>
            </Link>
          </div>
        </animated.div>
      </nav>
    </>
  );
};

export default MenuBar;
