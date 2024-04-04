import { Suspense } from "react";
import { Await } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import SearchIndex from "src/Components/SearchMovie/SearchIndex";
import MoviesListSkeleton from "src/Components/Skeleton/MoviesListSkeleton";
import { ErrorSearchMovies } from "src/Utils/ErrorFetch";

const Search = () => {
  const params = useParams();
  const searchMoviesList = useLoaderData();

  return (
    <>
      <Suspense fallback={<MoviesListSkeleton />}>
        <Await
          resolve={searchMoviesList.movies}
          errorElement={<ErrorSearchMovies params={params} />}
        >
          {(movies) => (
            <SearchIndex searchMoviesList={movies} params={params} />
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default Search;
