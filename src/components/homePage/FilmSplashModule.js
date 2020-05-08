import React, { useState, useLayoutEffect, createRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";

const FilmSplashModule = ({ title, studio, id, image_name, link }) => {
  const [isToggled, setToggle] = useState(false);
  const [height, setHeight] = useState(0);

  // CREATE A REF TO QUERY TO GET THE HEIGHT OF TH IMAGE TO CENTER THE TITLES

  const ref = createRef();

  //  CHECK FOR A RESIZED IMAGE  WHEN ANMATION IS TOGGLED

  //
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  ///////////////////////

  useLayoutEffect(() => {
    setHeight(ref.current.clientHeight);
  }, [isToggled, ref]);

  // CHECK IF MOBILE AND IF SO SET TO TOGGLED
  useLayoutEffect(() => {
    if (isMobileDevice()) {
      setTimeout(() => {
        setToggle(true);
      }, 1000);
      setHeight(ref.current.clientHeight);
    }
  }, [height, ref, windowWidth]);

  function isMobileDevice() {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  }

  const fadeImage = useTransition(isToggled, null, {
    from: { transform: "translate3d( 0, 0,0)", opacity: 0 },
    enter: { transform: "translate3d(0, 0,0)", opacity: 0.33 },
    leave: { transform: "translate3d(0, 0,0)", opacity: 0 },
  });

  const titleTopTransition = useTransition(isToggled, null, {
    from: { transform: "translate3d( 0,-100px,0)", opacity: 0 },
    enter: { transform: "translate3d(0,-30px,0)", opacity: 1 },
    leave: { transform: "translate3d(0,-5px,0)", opacity: 0 },
  });

  const titleSlideTransition = useTransition(isToggled, null, {
    from: { transform: "translate3d(-100px,0,0)", opacity: 0 },
    enter: { transform: "translate3d(0px,0,0)", opacity: 1 },
    leave: { transform: "translate3d(50px,0,0)", opacity: 0 },
  });

  const titleBottomTransition = useTransition(isToggled, null, {
    from: { transform: "translate3d( 0, 100px,0)", opacity: 0 },
    enter: { transform: "translate3d(0, 30px,0)", opacity: 1 },
    leave: { transform: "translate3d(0, 5px,0)", opacity: 0 },
  });

  // GET HEIGHT OF MODULE INSTANCE FROM STATE AND TURN INTO CSS INLINE STYLE
  const imageHeight = {
    height: `${height}px`,
  };

  return (
    <div
      id="film-splash-module"
      className=" w-full inline-block lg:w-1/2"
      onMouseEnter={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
    >
      <div
        className=" w-full absolute flex justify-center items-center  lg:w-1/2 "
        style={imageHeight}
      >
        {// ANIMATE IMAGE FADE
        fadeImage.map(
          ({ item, key, props: animation }) =>
            item && (
              <animated.div
                key={key}
                style={animation}
                className="bg-blue-800 h-full w-full"
              ></animated.div>
            )
        )}
      </div>
      <Link to={link}>
        <div
          className=" w-full absolute flex justify-center items-center text-lg text-center  md:text-3xl  lg:w-1/2"
          style={imageHeight}
        >
          {//  ANIMATE THE FILM TITLE
          titleTopTransition.map(
            ({ item, key, props: animation }) =>
              item && (
                <animated.p key={key} style={animation}>
                  {title}
                </animated.p>
              )
          )}
        </div>
        <div
          className=" w-full absolute flex justify-center items-center  lg:w-1/2 "
          style={imageHeight}
        >
          {// ANIMATE THE TITLE BREAK LINE
          titleSlideTransition.map(
            ({ item, key, props: animation }) =>
              item && (
                <animated.p key={key} style={animation}>
                  _____________________
                </animated.p>
              )
          )}
        </div>
        <div
          className=" w-full absolute flex justify-center items-center  text-sm md:text-base lg:w-1/2"
          style={imageHeight}
        >
          {// ANIMATE THE STUDIO TITLE
          titleBottomTransition.map(
            ({ item, key, props: animation }) =>
              item && (
                <animated.p key={key} style={animation}>
                  {studio}
                </animated.p>
              )
          )}
        </div>

        <div
          className="flex w-full h-auto justify-center  flex-row  items-start "
          ref={ref}
        >
          <img
            className="w-full px-1 h-auto"
            src={require(`../../images/film_stills/${image_name}`)}
            alt="menu"
          />
        </div>
      </Link>
    </div>
  );
};

export default FilmSplashModule;
