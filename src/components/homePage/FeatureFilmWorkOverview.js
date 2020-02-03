import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilmSplashModule from "./FilmSplashModule";
import filmProjectsList from "../../data/film_project_data.json";

function FeatureFilmWorkOverview() {
  const [filmProjects] = useState(filmProjectsList);

  return (
    <>
      <section id="film-work-overview" className="bg-bgColor py-10 pb-16 ">
        <div className="w-full flex justify-center  ">
          <Link to="/work/film-games">
            <h3 className="text-2xl md:text-4xl font-bold border-b border-gray-700 mb-5">
              Feature Film And Games
            </h3>
          </Link>
        </div>
        <section className=" ">
          {filmProjects.map(films => (
            <FilmSplashModule
              key={films.id}
              title={films.title}
              studio={films.studio}
              link={films.link}
              id={films.id}
              image_name={films.image_name}
            />
          ))}
        </section>
        <div className="flex justify-center ">
          <Link to="/work/film-games">
            <button className="md:text-xl thinFont border border-gray-700 rounded py-1 px-2 hover:text-blue-700 m-2">
              See More
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default FeatureFilmWorkOverview;
