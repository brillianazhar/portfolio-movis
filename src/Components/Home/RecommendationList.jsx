/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const RecommendationList = ({ recommendation }) => {
  const numSlice = Math.floor(Math.random() * 8);
  return (
    <>
      <section className="my-5">
        <div className="px-8 lg:px-20 py-5">
          <h1 className="text-sm lg:text-xl font-bold text-white">
            Recommendation
          </h1>
          <div className="flex w-full items-center">
            <div className="w-full h-1 lg:h-2 rounded-full bg-blue-500"></div>
            <Link
              to={`/movies/page/1`}
              className="text-xs lg:text-base pl-5 text-right w-auto text-white"
            >
              More Movie
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between gap-4 justify-items-center content-center items-center px-0 lg:px-20">
          {recommendation.slice(numSlice, numSlice + 12).map((item, i) => (
            <Link
              className="group w-[75px] lg:w-[200px]"
              to={`/movie/${item.id}`}
              key={i}
            >
              <div className="group relative overflow-hidden h-[110px] lg:h-[300px]">
                <img
                  src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
                  alt={item.title}
                  className="relative transition-all duration-200 top-0 left-0 object-cover group-hover:scale-110"
                />
              </div>
              <h1 className="text-xs lg:text-base truncate w-[75px] lg:w-[200px] group-hover:text-white">
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

export default RecommendationList;
