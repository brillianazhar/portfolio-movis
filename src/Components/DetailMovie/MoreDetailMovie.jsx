/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import ImageDetailMovie from "./ImageDetailMovie";

const MoreDetailMovie = ({ detail, credit, image }) => {
  const [view, setView] = useState(12);
  const totalCast = credit.cast
    .filter((item) => item.known_for_department === "Acting")
    .filter((item) => item.profile_path !== null).length;
  const moreCast = () => {
    setView((prevValue) => prevValue + 12);
  };

  return (
    <>
      <div id="detail" className="p-2 flex flex-col gap-y-10">
        <section className="flex flex-col md:flex-row items-center justify-center px-0 md:px-20 pt-20">
          <div className="w-[200px] group relative flex justify-center items-center">
            <img
              className="w-full group-hover:brightness-50 transition-all duration-200"
              src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
              alt=""
            />
            <div className="absolute gap-x-1 opacity-0 group-hover:opacity-100 w-16 h-16 flex justify-center rounded-full items-center bg-black text-white transition-all duration-200 border-2 border-blue-500">
              {detail.vote_average.toFixed(1)}
              <MdOutlineStar />
            </div>
          </div>
          <section className="md:ml-10 md:w-3/4 lg:w-1/2 flex flex-col justify-center gap-y-2">
            <div className="overview">
              <p className="text-xl text-white text-center my-5 md:my-0 md:text-left md:text-xl font-bold">
                {detail.title}
              </p>
              <p className="text-sm md:text-base">{detail.overview}</p>
            </div>
            <div className="genre">
              <p className="font-bold text-sm text-white">Genre</p>
              {detail.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="badge text-white text-xs md:text-sm mr-1 bg-blue-500"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <div className="release-date">
              <p className="font-bold text-sm text-white">Release</p>
              <p className="text-sm md:text-base">{detail.release_date}</p>
            </div>
            <div className="revenue">
              <p className="font-bold text-sm text-white">Revenue</p>
              <p className="text-sm md:text-base">
                {detail.revenue
                  ? `$ ${detail.revenue
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`
                  : "-"}
              </p>
            </div>
          </section>
        </section>
        <section className="flex flex-col flex-wrap items-center">
          <p className="font-bold text-lg md:text-xl text-white">Production</p>
          <div className="production mt-5 bg-white w-full py-2">
            <div className="flex flex-wrap justify-center items-center gap-x-5">
              {detail.production_companies.map(
                (companies) =>
                  companies.logo_path && (
                    <img
                      className="w-20"
                      key={companies.id}
                      src={`https://image.tmdb.org/t/p/original/${companies.logo_path}`}
                      alt=""
                    />
                  )
              )}
            </div>
          </div>
        </section>
        <section className="w-full">
          <p className="font-bold text-lg md:text-xl text-white text-center">
            Gallery
          </p>
          <div className="mt-5">
            <ImageDetailMovie image={image} />
          </div>
        </section>
        <section>
          <p className="font-bold text-lg md:text-xl mb-4 text-center text-white">
            Cast
          </p>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 justify-items-center gap-x-2 gap-y-2">
            {credit.cast
              .filter((item) => item.known_for_department === "Acting")
              .filter((item) => item.profile_path !== null)
              .slice(0, view)
              .map(
                (cast, i) =>
                  cast.profile_path && (
                    <div
                      key={i}
                      className="hover:scale-105 flex flex-col transition-all duration-200"
                    >
                      <img
                        className="w-[75px] md:w-[100px] rounded-md"
                        src={`https://image.tmdb.org/t/p/w185/${cast.profile_path}`}
                        alt=""
                      />
                      <p className="text-[9px] md:text-xs font-bold truncate w-[70px] md:w-20">
                        {cast.character}
                      </p>
                      <p className="text-[8px] md:text-[10px] truncate w-[70px] md:w-20">
                        {cast.name}
                      </p>
                    </div>
                  )
              )}
          </div>
          <div className="flex justify-center items-center mt-5">
            <button
              className={`text-xs md:text-sm border-2 py-1 px-2 rounded-full hover:text-white hover:bg-slate-700 ${
                view >= totalCast ? "hidden" : ""
              }`}
              onClick={moreCast}
            >
              More cast
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default MoreDetailMovie;
