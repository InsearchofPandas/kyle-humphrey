import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

function AboutMe() {
  return (
    <div className="bg-bgColor py-32  md:py-20 border-b border-gray-700 ">
      <div className="w-full flex justify-center  ">
        <h2 className="text-2xl md:text-4xl  font-bold border-b border-gray-700 text-center">
          About Me
        </h2>
      </div>

      <div className="w-full flex justify-center">
        <div className="  flex justify-center items-start my-4 md:my-16 py-12 md:w-11/12 h-full flex-wrap footerColor border border-gray-900  px-2">
          <div className="w-full md:w-5/12  flex justify-center items-center ">
            <img
              className="11/12 md:w-2/3 rounded-full"
              src={require("../../images/small_website_profile_pic.jpg")}
              alt="mypic"
            />
          </div>
          <div className="md:w-7/12 flex justify-start  items-start flex-wrap">
            <h3 className="w-full blackFont text-4xl py-4 text-center md:text-left ">
              Hello, <span className="thinFont text-3xl">I'm</span>{" "}
              <span className="eheavyFont text-3xl">Kyle Humphrey</span>{" "}
              <span className="thinFont text-3xl">and I </span>{" "}
            </h3>
            <h3 className="blackFont text-6xl w-full leading-none text-indigo-200 text-center md:text-left md:p-20">
              <p className="tracking-widest">ENJOY</p>
              <p className=" text-indigo-300 text-5xl">ENABLING</p>
              <p className=" text-indigo-400 ">
                <span className="pr-1  text-red-500">:D</span>ESIGN
              </p>
            </h3>
            <p className="heavyFont md:text-2xl mx-4 pb-12 text-center tracking-wide text-indigo-100 w-full border-b-8 border-dotted">
              I am greatly interested in how we can simplify experiences while
              simultaneously maximizing the efficiency of communication. I will
              do so by designing and developing interactive digital products and
              apps that make technology accessible, productive and intuitive. I
              hope we can use our understanding of behavioral science to
              mindfully engineer services that are ethical and mutually
              beneficial for both the users and creators of the technology. I
              firmly believe that the facilitation of joyful experiences can
              contribute richly to the daily lives of individuals and the
              expansion of the vast interconnected web of a positive sum global
              economy.
            </p>
          </div>

          <p className="heavyFont md:text-2xl text-center tracking-wide text-indigo-100 pt-12  w-10/12">
            In the past I’ve been busy. I began my education by studying film
            production at NYU. While in New York I worked as a photographer’s
            assistant on shoots for companies such as ESPN, Vanity Fair and
            Italian Vogue. Later, I finished undergraduate school by acquiring a
            BFA from Savannah College of Art and Design. Immediately after
            school, I was fortunate to start an apprenticeship with Walt Disney
            Animation Studios. After my apprenticeship at Disney I worked as an
            artist on two Academy Award winning films for Best Feature
            Animation: Frozen and Big Hero 6. Later, I went on to work on a
            third Oscar winning film, Spider-Man: Into the Spider-Verse for Sony
            Pictures Imageworks. Spider-Verse was one of many film projects I
            contributed to as a Technical Director at Sony. Most recently I
            worked with Blizzard Entertainment as a Lighting and Compositing
            Artist. While I was there, I contributed to important scenes in the
            cinematic trailers for two of their upcoming games World of
            Warcraft: Shadowlands and Overwatch: 2.
          </p>
          <div className="py-8 md:text-lg text-center tracking-wide w-full flex  justify-center">
            <Link
              className="text-blue-500 underline"
              to="/aboutme#resume_anchor"
            >
              view
            </Link>
            &nbsp;
            <p>
              {" "}
              or{" "}
              <a
                download="resume"
                className="text-blue-500 underline"
                href={require("../../images/resume.pdf")}
              >
                download
              </a>{" "}
              my resume
            </p>
          </div>
          <div className="heavyFont md:text-2xl text-center tracking-wide  m-2 w-full justify-center">
            <p> On a more personal note I'm always up for an adventure...</p>
          </div>
          <div className="w-full flex justify-center">
            <img
              className="w-full md:w-11/12 "
              src={require("../../images/website_phots_of_me_medium.jpg")}
              alt="mypics"
            />
          </div>
          <a
            download="resume"
            className="11/12 md:w-5/12 pt-6 md:pt-32 "
            href={require("../../images/resume.pdf")}
          >
            <img
              id="resume_anchor"
              src={require("../../images/resume.jpg")}
              alt="mypic"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
