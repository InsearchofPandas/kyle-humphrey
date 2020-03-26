import React from "react";
import BackButtonAnim from "../utilities/BackButtonAnim";
import image from "../../images/code_stills/validator.jpg";

export default function Validator() {
  return (
    <div className="bg-bgColor pt-32 md:pt-48 ">
      <div className="w-full flex justify-center">
        <h2 className="text-2xl md:text-4xl  font-bold border-b border-gray-700 text-center">
          Form Validator
        </h2>
      </div>
      <div className="w-full flex flex-wrap justify-center pb-4">
        <h3 className="w-full  pt-8 px-2 md:w-7/12  text-xl md:text-2xl md:text-3xl">
          Click the image to test my form validator
        </h3>
        <div className=" flex justify-center py-12">
          <a
            className=" w-5/12"
            href="https://kylehumphrey-form-validator.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image} alt="link to game" />
          </a>
        </div>
        <p className="thinFont text-lg md:text-xl p-2  md:w-7/12">
          A client-side registration form. The form utilizes inline validation
          with real time feedback that is provided immediately after answering
          each field.
        </p>
        <p className="thinFont text-lg md:text-xl p-2  md:w-7/12">
          Followed the password creation guidlines by &nbsp;
          <a
            className="text-2xl text-blue-400"
            href="https://www.nngroup.com/articles/password-creation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nielsen Norman Group
          </a>
          .
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center pb-4">
        <p className="thinFont text-xl p-2 md:w-7/12">
          Please view the code here on &nbsp;
          <a
            className="text-2xl text-blue-400"
            href="https://github.com/InsearchofPandas/Form-Validator"
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
