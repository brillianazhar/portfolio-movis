import { defer } from "react-router-dom";
import { ApiOptions } from "../../Utils/api";

export const DataMovies = async ({ params }) => {
  const moviesList = GetMovies(params);
  return defer({ movies: moviesList });
};

export const GetMovies = async (params) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}movie/top_rated?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=${params.page}`,
    ApiOptions
  );
  const movies = await response.json();
  return movies;
};
