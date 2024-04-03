/* eslint-disable react/prop-types */
import { defer } from "react-router-dom";
import { ApiOptions } from "../../Utils/api";

export const DetailMovie = async ({ params }) => {
  const detailMovie = GetDetailMovie(params);
  const videoMovie = GetMovieVideo(params);
  const creditMovie = GetCreditMovie(params);
  const imageMovie = GetImageMovie(params);
  return defer({
    detail: detailMovie,
    video: videoMovie,
    credit: creditMovie,
    image: imageMovie,
  });
};

export const GetImageMovie = async (params) => {
  const movieId = params.movieId;
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}movie/${movieId}/images?api_key=${
      import.meta.env.VITE_API_KEY
    }`,
    ApiOptions
  );
  const image = await response.json();
  return image.backdrops;
};

export const GetMovieVideo = async (params) => {
  const movieId = params.movieId;
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}movie/${movieId}/videos?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`,
    ApiOptions
  );
  const video = await response.json();
  return video.results.filter((movie) => movie.type === "Trailer");
};

export const GetDetailMovie = async (params) => {
  const movieId = params.movieId;
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}movie/${movieId}?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`,
    ApiOptions
  );
  const movies = await response.json();
  return movies;
};

export const GetCreditMovie = async (params) => {
  const movieId = params.movieId;
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}movie/${movieId}/credits?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`,
    ApiOptions
  );
  const credit = await response.json();
  return credit;
};
