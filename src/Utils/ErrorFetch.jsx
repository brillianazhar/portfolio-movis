/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const ErrorPopular = () => {
  return (
    <section className="my-5">
      <div className="px-8 lg:px-20 py-5">
        <h1 className="text-sm lg:text-xl font-bold text-white">
          Popular Movies
        </h1>
        <div className="w-full h-1 lg:h-2 rounded-full bg-blue-500"></div>
      </div>
      <div className="flex flex-col flex-wrap text-sm lg:text-base justify-center gap-1 justify-items-center content-center items-center px-0 lg:px-20">
        <p>Error 401</p>
        <Link to={"/"} className="underline">
          Reload
        </Link>
      </div>
    </section>
  );
};

export const ErrorRecommendation = () => {
  return (
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
      <div className="flex flex-col flex-wrap text-sm lg:text-base justify-center gap-1 justify-items-center content-center items-center px-0 lg:px-20">
        <p>Error 401</p>
        <Link to={"/"} className="underline">
          Reload
        </Link>
      </div>
    </section>
  );
};

export const ErrorListMovies = ({ params }) => {
  return (
    <section className="pt-10 min-h-screen lg:pt-20">
      <section className="my-5 text-center">
        <h1 className="text-base lg:text-xl font-bold text-white">
          Movies for you
        </h1>
      </section>
      <section className="flex flex-col flex-wrap justify-center gap-x-1 md:gap-x-5 xl:gap-x-10 gap-y-2 items-center px-0 lg:px-20">
        <p>Error 401</p>
        <Link to={`/movies/page/${params.page}`} className="underline">
          Reload
        </Link>
      </section>
    </section>
  );
};

export const ErrorSearchMovies = ({ params }) => {
  console.log(params);
  return (
    <section className="pt-10 min-h-screen lg:pt-20 flex flex-col">
      <section className="my-5 text-center">
        <h1 className="text-sm md:text-base text-white">
          Result for {params.movieName}...
        </h1>
      </section>
      <section className="flex flex-col flex-wrap justify-center gap-x-1 md:gap-x-5 xl:gap-x-10 gap-y-2 items-center px-0 lg:px-20">
        <p>Error 401</p>
        <Link
          to={`/search/${params.movieName}/page/${params.page}`}
          className="underline"
        >
          Reload
        </Link>
      </section>
    </section>
  );
};

export const ErrorDetail = ({ detail }) => {
  console.log(detail);
  return (
    <>
      <div
        className={`w-full h-screen flex flex-col justify-center items-center`}
      >
        <p>Error 401</p>
        <Link className="underline">Reload</Link>
      </div>
    </>
  );
};
