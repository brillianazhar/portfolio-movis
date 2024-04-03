import { defer } from "react-router-dom";
import { ApiOptions } from "../../Utils/api";

export const MovieList = async () => {
  const popularList = GetMoviePopular();
  const recommendationList = GetMovieRecommendation();
  return defer({ popular: popularList, recommendation: recommendationList });
};

export const GetMoviePopular = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}movie/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`,
    ApiOptions
  );
  const movies = await response.json();
  return movies.results;
};

export const GetMovieRecommendation = async () => {
  // const response = await fetch(
  //   `${import.meta.env.VITE_BASE_URL}movie/top_rated?api_key=${
  //     import.meta.env.VITE_API_KEY
  //   }&language=en-US&page=1`,
  //   ApiOptions
  // );
  // const movie = await response.json();

  const page = Math.floor(Math.random() * 100);

  const responses = await fetch(
    `${import.meta.env.VITE_BASE_URL}movie/top_rated?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=${page}`,
    ApiOptions
  );
  const movies = await responses.json();

  return movies.results;
};
