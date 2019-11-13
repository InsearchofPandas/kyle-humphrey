import React from 'react';

function AboutMe() {
  return (
    <div className="bg-bgColor py-40 border-b border-gray-700 h-full">
      <div className="w-full flex justify-center  ">
        <h1 className="text-4xl  font-bold border-b border-gray-700">
          About Me
        </h1>
      </div>
      <div className="flex justify-center ">
        <p className="text-xl thinFont border-b border-gray-700">
          This is about Kyle Humphrey
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
