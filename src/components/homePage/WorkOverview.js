import React from "react";

function WorkOverview() {
  const icons = ["blizzard", "disney", "sony", "superfad", "reelfx"];

  return (
    <>
      <section id="work-overview" className="aboutMeGrad w-full ">
        <div className="flex justify-center py-24 bgColorTransStrong border-b border-gray-700">
          <p className=" text-4xl font-semibold md:tracking-wider thinFont text-center px-2">
            I am a developer specializing in React.js with a cognizance for user
            experience and a heart for design
          </p>
        </div>
        <div className="flex pt-20 md:pt-48 justify-center  text-center bgColorTransMed">
          <p className=" text text-xl   font">
            In the past I worked as a technical director and artist for Animated
            Films and Games
          </p>
        </div>
        <div className="  bgColorTransMed flex justify-center flex-wrap   pt-12">
          {icons.map(icon => (
            <img
              key={icon}
              className="h-16 md:h-20 m-4 inline-block text-center "
              src={require(`../../images/company_logos/${icon}_logo.png`)}
              alt="menu"
            />
          ))}
        </div>
        <div className="flex justify-center bgColorTransMed pb-20 md:pb-40">
          <div className="thinFont">A few of the places I've worked</div>
        </div>
      </section>
    </>
  );
}

export default WorkOverview;
