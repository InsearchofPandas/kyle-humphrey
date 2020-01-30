import React from "react";

import { Link } from "react-router-dom";

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
      title: "Feature Film And Games",
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
      link: "/contact",
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
      <div
        className={
          "fixed w-full h-full top-0 left-0  flex items-center justify-center " +
          (isMenuToggled ? "z-40" : "z--10")
        }
      >
        <ul className="text-4xl md:textLarge text-center">
          {transitions.map(({ item, props, key }) => (
            <animated.div
              className=" flex justify-center"
              key={key}
              style={props}
              onClick={item.onClickFunction}
            >
              <Link to={item.link}>
                <li
                  className={
                    currentLocation === item.link
                      ? "text-blue-900 interactiveHover"
                      : " interactiveHover"
                  }
                >
                  {item.title}
                </li>
              </Link>
            </animated.div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MenuList2;
