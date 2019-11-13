import React from "react";
import Menu from "./Menu";

import { Link } from "react-router-dom";
import Portal from "../components/utilities/Portal";
import { useTransition, animated } from "react-spring";

const MenuList2 = ({ setMenuToggle, isMenuToggled }) => {
  const menuItems = [
    {
      title: "Home",
      link: "/",
      key: 1,
      onClickFunction: () => setMenuToggle(!isMenuToggled)
    },
    {
      title: " React Projects",
      link: "/work/codeing",
      key: 2,
      onClickFunction: () => setMenuToggle(!isMenuToggled)
    },
    {
      title: "Feature Film Work",
      link: "/work/film-games",
      key: 3,
      onClickFunction: () => setMenuToggle(!isMenuToggled)
    },
    {
      title: " About Me",
      link: "/aboutme",
      key: 4,
      onClickFunction: () => setMenuToggle(!isMenuToggled)
    },
    {
      title: "Contact",
      link: "temp",
      key: 5,
      onClickFunction: () => setMenuToggle(!isMenuToggled)
    }
  ];

  const navMenu = isMenuToggled === false ? [] : menuItems;

  const transitions = useTransition(navMenu, item => item.key, {
    from: { transform: "translate3d(-40px,0,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0,0)", opacity: 1 },
    leave: { opacity: 0 },
    trail: 50
  });

  const currentLocation = window.location.pathname;

  return (
    <>
      {isMenuToggled && (
        <div className="fixed w-full h-full top-0 left-0  flex items-center justify-center z-40">
          <ul className="textLarge ">
            {transitions.map(({ item, props, key }) => (
              <animated.div
                className=" flex justify-center"
                key={key}
                style={props}
                onClick={item.onClickFunction}
              >
                <Link to={item.link}>
                  <span
                    className={
                      currentLocation === item.link ? "text-blue-900" : ""
                    }
                  >
                    {item.title}
                  </span>
                </Link>
              </animated.div>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MenuList2;
