/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import { ApiOptions } from "../../Utils/api";

const SearchMovieList = ({ movieList }) => {
  // const searchMoviesList = await GetSearchMovieList(params);

  return (
    <>
      {movieList.results.map((item, i) => (
        <Link
          to={`/movie/${item.id}`}
          key={i}
          className="group flex flex-col justify-between w-[75px] lg:w-[200px]"
        >
          <div className="group relative overflow-hidden h-[110px] lg:h-[300px]">
            <img
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w200/${item.poster_path}`
                  : `/img/img_placeholder.png`
              }
              alt={`${item.title.split(" ")[0]}...`}
              className={`relative transition-all duration-200 top-0 left-0 object-cover object-center group-hover:scale-110 ${
                item.poster_path ? "" : "h-[110px] lg:h-[300px]"
              }`}
            />
          </div>
          <h1 className="truncate text-xs lg:text-base w-[75px] lg:w-[200px] group-hover:text-white">
            {item.title}
          </h1>
          <p className="text-[11px] lg:text-base group-hover:text-white">
            {item.release_date.split("-")[0]}
          </p>
        </Link>
      ))}
    </>
  );
};

export default SearchMovieList;

// export const GetSearchMovieList = async (params) => {
//   const response = await fetch(
//     `${import.meta.env.VITE_BASE_URL}search/movie?api_key=${
//       import.meta.env.VITE_API_KEY
//     }&query=${params.movieName}&language=en-US&page=1`,
//     ApiOptions
//   );
//   const movies = await response.json();
//   return movies.results;
// };
