/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HomeList = ({ popular }) => {
  useEffect(() => {
    document.title = "MovIs - Movie Database";
  }, []);
  return (
    <>
      <div className="w-full h-screen lg:h-[500px] text-white bg-hero bg-cover bg-bottom px-10 flex flex-col gap-y-5 items-center lg:items-start justify-center">
        <p className="text-base lg:text-lg">Movie Database</p>
        <p className="text-4xl font-bold text-center lg:text-left">
          Discover The Greatest <span className="text-blue-500">MovI</span>e
          <span className="text-blue-500">s</span>
        </p>
      </div>
      <section className="my-5">
        <div className="px-8 lg:px-20 py-5">
          <h1 className="text-sm lg:text-xl font-bold text-white">
            Popular Movies
          </h1>
          <div className="w-full h-1 lg:h-2 rounded-full bg-blue-500"></div>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between gap-4 justify-items-center content-center items-center px-0 lg:px-20">
          {popular.slice(0, 12).map((item, i) => (
            <Link
              className="group w-[75px] lg:w-[200px] "
              to={`/movie/${item.id}`}
              key={i}
            >
              <div className="group relative overflow-hidden">
                <img
                  src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
                  alt={item.title}
                  className="relative transition-all duration-200 top-0 left-0 object-cover group-hover:scale-110"
                />
              </div>
              <h1 className="truncate w-[75px] lg:w-[200px] text-xs lg:text-base group-hover:text-white">
                {item.title}
              </h1>
              <p className="text-[11px] lg:text-base group-hover:text-white">
                {item.release_date.split("-")[0]}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeList;
