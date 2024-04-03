/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchMovieList from "src/Components/SearchMovie/SearchMovieList";

const SearchIndex = ({ searchMoviesList, params }) => {
  useEffect(() => {
    document.title = `Search for "${params.movieName}" - MovIs`;
  }, [params]);
  const navigate = useNavigate();
  const totalPages = Array.from(
    { length: searchMoviesList.total_pages },
    (_, i) => i + 1
  );
  const [currentPage, setCurrentPage] = useState(Number(params.page));

  useEffect(() => {
    setCurrentPage(Number(params.page));
  }, [searchMoviesList]);

  const handleBtnPage = (option) => {
    if (option === "prev") {
      if (currentPage <= 1) return;
      setCurrentPage(currentPage - 1);
      navigate(`/search/${params.movieName}/page/${currentPage - 1}`);
    } else {
      if (currentPage >= totalPages.length) return;
      setCurrentPage(currentPage + 1);
      navigate(`/search/${params.movieName}/page/${currentPage + 1}`);
    }
  };

  return (
    <section className="pt-10 min-h-screen lg:pt-20 flex flex-col">
      <section className="my-5 text-center">
        <h1 className="text-sm md:text-base text-white">
          Result for {params.movieName}...
        </h1>
      </section>
      <section className="flex flex-wrap justify-center gap-x-1 md:gap-x-5 xl:gap-x-10 gap-y-2 items-center px-0 lg:px-20">
        <SearchMovieList movieList={searchMoviesList} params={params} />
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

export default SearchIndex;
