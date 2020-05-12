import React from "react";
import image from "../../images/code_stills/picture_bay.jpg";
import BackButtonAnim from "../utilities/BackButtonAnim";

export default function PictureBay() {
  return (
    <div className="bg-bgColor pt-32 md:pt-48 ">
      <div className="w-full flex justify-center">
        <h2 className="text-2xl md:text-4xl  font-bold border-b border-gray-700 text-center">
          Picture Bay
        </h2>
      </div>
      <div className="w-full flex flex-wrap justify-center pb-4">
        <h3 className="w-full  pt-8 px-2 md:w-7/12  text-xl md:text-2xl md:text-3xl">
          Click the image to see Picture Bay
        </h3>
        <div className=" flex justify-center py-12">
          <a
            className=" w-5/12"
            href="https://kylehumphrey-picture-bay.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image} alt="link to game" />
          </a>
        </div>
        <p className="thinFont text-lg md:text-xl p-2  md:w-7/12">
          About Picture Bay
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center pb-4">
        <p className="thinFont text-xl p-2 md:w-7/12">
          Please view the code here on &nbsp;
          <a
            className="text-2xl text-blue-400"
            href="https://github.com/InsearchofPandas/picture-bay"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <div>
            <div className="py-12">
              <BackButtonAnim />
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}
