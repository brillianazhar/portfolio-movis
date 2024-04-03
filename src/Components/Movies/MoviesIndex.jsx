/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MoviesList from "src/Components/Movies/MoviesList";

const MoviesIndex = ({ moviesList, params }) => {
  useEffect(() => {
    document.title = "Movies - MovIs";
  }, []);

  const navigate = useNavigate();
  const totalPages = Array.from(
    { length: moviesList.total_pages },
    (_, i) => i + 1
  );
  const [currentPage, setCurrentPage] = useState(Number(params.page));

  useEffect(() => {
    setCurrentPage(Number(params.page));
  }, [moviesList]);

  const handleBtnPage = (option) => {
    if (option === "prev") {
      if (currentPage <= 1) return;
      setCurrentPage(currentPage - 1);
      navigate(`/movies/page/${currentPage - 1}`);
    } else {
      if (currentPage >= totalPages.length) return;
      setCurrentPage(currentPage + 1);
      navigate(`/movies/page/${currentPage + 1}`);
    }
  };

  return (
    <section className="pt-10 min-h-screen lg:pt-20">
      <section className="my-5 text-center">
        <h1 className="text-base lg:text-xl font-bold text-white">
          Movies for you
        </h1>
      </section>
      <section className="flex flex-wrap justify-center gap-x-1 md:gap-x-5 xl:gap-x-10 gap-y-2 items-center px-0 lg:px-20">
        <MoviesList moviesList={moviesList} params={params} />
      </section>
      <section className="mt-10 gap-y-2 flex flex-col items-center">
        <div className="join">
          <button
            className={`join-item btn ${currentPage === 1 ? "hidden" : ""}`}
            onClick={() => handleBtnPage("prev")}
          >
            «
          </button>
          <button className="join-item btn">{currentPage}</button>
          <button
            className={`join-item btn ${
              currentPage === totalPages.length ? "hidden" : ""
            }`}
            onClick={() => handleBtnPage("next")}
          >
            »
          </button>
        </div>
        <p className="text-[10px] md:text-sm">
          Page {currentPage} of {totalPages.length}
        </p>
      </section>
    </section>
  );
};

export default MoviesIndex;
