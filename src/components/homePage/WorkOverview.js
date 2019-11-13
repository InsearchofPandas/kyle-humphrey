import React from 'react';

function WorkOverview() {
  return (
    <div className="aboutMeGrad  ">
      <section>
        <div className="flex justify-center py-24 bgColorTransStrong border-b border-gray-700">
          <p className=" text-4xl font-semibold tracking-wider thinFont ">
            I'm developer specializing in React.js with a cognizance for user
            experience and a heart for design
          </p>
        </div>
      </section>
      <section className=" ">
        <div className="flex pt-48 justify-center   bgColorTransMed">
          <p className=" text text-xl  font">
            In the past I worked as an artist and technical director for
            Animated Films and Games
          </p>
        </div>

        <div className="  bgColorTransMed flex justify-center   pt-12">
          <img
            className="h-20 m-4"
            src={require('../../images/company_logos/blizzard_logo.png')}
            alt="menu"
          />
          <img
            className="h-20 m-4"
            src={require('../../images/company_logos/disney_logo.png')}
            alt="menu"
          />
          <img
            className="h-20 m-4"
            src={require('../../images/company_logos/sony_logo.png')}
            alt="menu"
          />
          <img
            className="h-20 m-4"
            src={require('../../images/company_logos/superfad_logo.png')}
            alt="menu"
          />
          <img
            className="h-16 m-4 pt-2"
            src={require('../../images/company_logos/reelfx_logo.png')}
            alt="menu"
          />
        </div>
        <div className="flex justify-center bgColorTransMed pb-40">
          <div className="thinFont">A few of the places I've worked</div>
        </div>
      </section>
    </div>
  );
}

export default WorkOverview;
