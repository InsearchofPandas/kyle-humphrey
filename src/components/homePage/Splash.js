import React from "react";

function Splash() {
  return (
    <>
      <section id="home-splash" className="w-full h-95vh">
        <div className=" w-full border-b border-gray-700 flex justfy-center">
          <div className="logo w-full h-vh95">
            <div className="flex jsutify center" />

            <div className="text-white   h-full  flex justify-center items-end pb-0 ">
              <div className="w-42  border border-gray-700  px-4 bgColorTrans">
                <div className="flex justify-center">
                  <h2 className="textColorTrans  text-smallscreen md:text-fullscreen text-center ">
                    Designer <span className="hidden md:inline ">&</span>{" "}
                    Developer
                  </h2>
                </div>
                <div className="  flex justify-center items-center h-full">
                  <img
                    className="h-8 md:h-12 absolute mt-2"
                    src={require("../../images/chevron.png")}
                    alt="menu"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Splash;
