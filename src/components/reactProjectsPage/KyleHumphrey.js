import React from "react";

export const KyleHumphrey = () => {
  return (
    <div className="bg-bgColor pt-32 md:pt-48 h-screen">
      <div className="w-full flex justify-center">
        <h2 className="text-2xl md:text-4xl  font-bold border-b border-gray-700 text-center">
          KyleHumphrey.com
        </h2>
      </div>
      <div className="w-full flex flex-wrap justify-center pb-4">
        <h3 className="w-full  p-2 md:w-7/12 text-2xl md:text-3xl">The Site</h3>
        <p className="thinFont text-xl p-2 md:w-7/12">
          Please view the code here on{" "}
          <a
            className="text-2xl text-blue-400"
            href="https://github.com/InsearchofPandas/kyle-humphrey"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </p>
      </div>
    </div>
  );
};
