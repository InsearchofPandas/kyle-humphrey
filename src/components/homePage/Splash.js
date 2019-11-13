import React from "react";

function Splash() {
  return (
    <div>
      <section className="w-full h-screen">
        <div className=" h-screen  w-full border-b border-gray-700 flex justfy-center">
          <div className="logo w-full">
            <div className="flex jsutify center" />

            <div className="text-white textOutline  h-full  flex justify-center items-end pb-10 ">
              <div className="w-42  border border-gray-700  px-4 bgColorTrans">
                <div className="flex justify-center">
                  <p className="textColorTrans ">UX DEVLOPER</p>
                </div>
                <div className="  flex justify-center items-center h-full">
                  <img
                    className="h-12 absolute mt-2"
                    src={require("../../images/chevron.png")}
                    alt="menu"
                  />
                </div>

                <div className=" absolute bg-red-500 w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Splash;
