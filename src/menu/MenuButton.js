import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import Portal from "../components/utilities/Portal";

import Menu from "./Menu";

import MenuList from "./MenuList";

const MenuButton = ({ hideMenuBar }) => {
  const [isMenuToggled, setMenuToggle] = useState(false);

  const fade = useTransition(isMenuToggled, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const fadeMenuButton = useTransition(isMenuToggled, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <>
      <Portal>
        <MenuList setMenuToggle={setMenuToggle} isMenuToggled={isMenuToggled} />
        {fade.map(
          ({ item, key: index, props: animation }) =>
            item && (
              <Menu
                index={index}
                animation={animation}
                hideMenuBar={hideMenuBar}
              />
            )
        )}
      </Portal>

      {fadeMenuButton.map(({ item, key, props }) =>
        item ? (
          <animated.div style={props} key={key}>
            <button>
              <img
                className="h-5 item-center pr-2"
                src={require("../images/x.png")}
                alt="menu"
                onClick={() => setMenuToggle(!isMenuToggled)}
              />
            </button>
          </animated.div>
        ) : (
          <animated.div style={props} key={key}>
            <button></button>{" "}
            <button>
              <img
                className="h-4 item-center"
                src={require("../images/menu_test.png")}
                alt="menu"
                onClick={() => setMenuToggle(!isMenuToggled)}
              />
            </button>
          </animated.div>
        )
      )}
    </>
  );
};

export default MenuButton;
