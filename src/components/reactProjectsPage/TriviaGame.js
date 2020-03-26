import React from "react";

export default function TriviaGame() {
  return (
    <div className="bg-bgColor pt-32 md:pt-48 h-screen">
      <div className="w-full flex justify-center">
        <h2 className="text-2xl md:text-4xl  font-bold border-b border-gray-700 text-center">
          Default Project Page
        </h2>
      </div>
      <div className="w-full flex flex-wrap justify-center pb-4">
        <h3 className="w-full  pt-8 px-2 md:w-7/12  text-xl md:text-2xl md:text-3xl">
          The Site
        </h3>
        <p className="thinFont text-lg md:text-xl p-2 md:w-7/12">
          This is a projects page.
        </p>
      </div>
    </div>
  );
}
