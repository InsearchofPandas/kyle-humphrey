import React from 'react';
import { Link } from 'react-router-dom';

function FeatureFilmWork() {
  return (
    <div className="bg-bgColor py-10  border-b border-gray-700">
      <div className="w-full flex justify-center  ">
        <Link to="/work/film-games">
          <h1 className="text-4xl  font-bold border-b border-gray-700 mb-3">
            Feature Film And Games
          </h1>
        </Link>
      </div>
      <section>
        <div className="flex justify-center">
          <section className="w-1/2 spiderman  flex justify-center  items-center">
            <p>SPIDERDUDE</p>
          </section>

          <Link to="/work/film-games">
            <img
              className=""
              src={require('../../images/film_stills/hotelT_crop.jpg')}
              alt="menu"
            />
          </Link>
        </div>
      </section>
      <div className="flex justify-center ">
        <Link to="/work/film-games">
          <button className="text-xl thinFont border-b border-gray-700">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeatureFilmWork;
