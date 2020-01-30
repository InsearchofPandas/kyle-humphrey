import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LinkedInLogo } from "../images/linkedin.svg";
import { ReactComponent as InstagramLogo } from "../images/instagram.svg";
import { ReactComponent as VimeoLogo } from "../images/vimeo.svg";
import { ReactComponent as GitHubLogo } from "../images/octicon.svg";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <>
      <footer className="footerColor w-full   md:flex  justify-center items-center">
        <div className=" w-1/3 md:flex justify-center hidden">
          <Link to="/" className="text-white text-2xl  text-outline ">
            [KYLE HUMPHREY]
          </Link>
        </div>
        <div className="  p-4 md:w-1/3 flex justify-center">
          <div className="w-6 mx-2">
            <a
              href="https://www.linkedin.com/in/kyle-humphrey-1949165a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<LinkedInLogo />}
            </a>
          </div>
          <div className="w-6 mx-2">
            <a
              href="https://www.instagram.com/lostwithoutshoes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<InstagramLogo />}
            </a>
          </div>
          <div className="w-6 mx-2">
            <a
              href="https://vimeo.com/kylehumphrey"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<VimeoLogo />}
            </a>
          </div>
          <div className="w-6 mx-2">
            <a
              href="https://github.com/InsearchofPandas"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<GitHubLogo />}
            </a>
          </div>
        </div>
        <div className=" md:w-1/3 flex justify-center">
          <p className="text-xs md:text-base">
            Coded by Kyle Humphrey © {year}. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
