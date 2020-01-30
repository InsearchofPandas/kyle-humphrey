import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <>
      <section
        id="about-me-overview"
        className="bg-bgColor py-10  border-b border-gray-700 "
      >
        <div className="w-full flex justify-center  ">
          <Link to="/aboutme">
            <h3 className="text-3xl md:text-4xl  font-bold border-b border-gray-700">
              About Me
            </h3>
          </Link>
        </div>
        <div className="w-full flex justify-center">
          <div className="  flex justify-center items-start my-16 py-12 md:w-11/12 h-full flex-wrap footerColor border border-gray-900  px-2">
            <div className="w-full md:w-5/12  flex justify-center items-center ">
              <img
                className="11/12 md:w-2/3 rounded-full"
                src={require("../../images/small_website_profile_pic.jpg")}
                alt="menu"
              />
            </div>
            <div className="md:w-7/12 flex justify-start  items-start flex-wrap">
              <h3 className="w-full blackFont text-4xl py-4 text-center md:text-left ">
                Hello, <span className="thinFont text-3xl">I'm</span>{" "}
                <span className="eheavyFont text-3xl">Kyle Humphrey</span>{" "}
                <span className="thinFont text-3xl">and I</span>{" "}
              </h3>
              <div className="blackFont text-6xl w-full leading-none text-indigo-200 text-center md:text-left  md:p-20">
                <p className="tracking-widest">ENJOY</p>
                <p className=" text-indigo-300 text-5xl">ENABLING</p>
                <p className=" text-indigo-400 ">
                  <span className="pr-1  text-red-500">:D</span>ESIGN
                </p>
              </div>
              <p className="heavyFont text-xl pt-6 md:pt-0  md:text-2xl px-2  pb-16 text-center tracking-wide text-indigo-100 w-full">
                I am greatly interested in how we can simplify experiences while
                simultaneously maximizing the efficiency of communication. I
                will do so by designing and developing interactive digital
                products and apps that make technology accessible, productive
                and intuitive. I hope we can use our understanding of behavioral
                science to mindfully engineer services that are ethical and
                mutually beneficial for both the users and creators of the
                technology. I firmly believe that the facilitation of joyful
                experiences can contribute richly to the daily lives of
                individuals and the expansion of the vast interconnected web of
                a positive sum global economy.
              </p>
            </div>

            <div className="flex justify-center ">
              <Link to="/aboutme">
                <button className="md:text-xl thinFont border border-gray-700 rounded py-1 px-2 hover:text-blue-700">
                  <p> See more about my past, skillsets, and CV </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
