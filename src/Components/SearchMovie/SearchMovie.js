import { defer } from "react-router-dom";
import { ApiOptions } from "../../Utils/api";

export const GetSearchMovie = async ({ params }) => {
  const movie = GetSearchMovieList(params);
  return defer({ movies: movie });
};

export const GetSearchMovieList = async (params) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}search/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&query=${params.movieName}&language=en-US&page=${params.page}`,
    ApiOptions
  );
  const movies = await response.json();
  return movies;
};
