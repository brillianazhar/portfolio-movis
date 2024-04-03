/* eslint-disable react/prop-types */
import VideoPlayer from "src/Utils/VideoPlayer";
import { GoArrowDownRight } from "react-icons/go";
import { useEffect } from "react";

const BannerDetailMovie = ({ detail, video }) => {
  const imgSRC = `https://image.tmdb.org/t/p/w1280/${detail.backdrop_path}`;

  useEffect(() => {
    document.title = `${detail.title} - MovIs`;
  }, []);
  return (
    <>
      {/* Background image */}
      <div
        className={`relative w-full h-screen bg-cover bg-center`}
        style={{ backgroundImage: `url(${imgSRC})` }}
      ></div>
      <div className="lg:px-10 absolute top-0 left-0 backdrop-brightness-50 text-white w-full h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <section className="flex flex-wrap flex-col lg:basis-10/12 justify-center items-center lg:items-start gap-1 mb-10 md:mb-14 lg:mb-0">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-center lg:text-left">
            {detail.title}
          </h1>
          <p>{detail.release_date.split("-")[0]}</p>
          <div className="flex flex-wrap gap-x-2 items-center justify-center lg:items-center lg:justify-start text-xs md:text-sm lg:text-base">
            {detail.genres.map((genre, i) => (
              <p key={genre.id}>
                {i === detail.genres.length - 1
                  ? `${genre.name}`
                  : `${genre.name}, `}
              </p>
            ))}
          </div>
          <div className="ratings flex items-center my-5">
            <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-xs lg:text-base flex justify-center rounded-full items-center bg-black border-2 border-blue-500">
              {detail.vote_average.toFixed(1)}
            </div>
            <div className="ml-3 flex flex-col gap-1">
              <div className="rating rating-sm lg:rating-md">
                {Array.from(Array(10)).map((item, i) => (
                  <input
                    key={i}
                    disabled={true}
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-blue-500"
                    defaultChecked={
                      i === Math.ceil(detail.vote_average) - 1 ? true : false
                    }
                  />
                ))}
              </div>
              <p className="text-xs lg:text-base">{detail.vote_count} votes</p>
            </div>
          </div>
          <div className="btn-more flex items-center mt-5 gap-x-1 hover:scale-110 transition-all duration-200">
            <a data-target="#detail" className="font-bold" href="#detail">
              <p>MORE DETAILS</p>
            </a>
            <GoArrowDownRight className="text-xl" />
          </div>
        </section>
        <div className="lg:basis-2/12">
          <VideoPlayer
            youtubeId={video.length ? video[video.length - 1].key : ""}
          />
        </div>
      </div>
    </>
  );
};

export default BannerDetailMovie;
