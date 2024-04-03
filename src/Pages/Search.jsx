import { Suspense } from "react";
import { Await } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import SearchIndex from "src/Components/SearchMovie/SearchIndex";
import MoviesListSkeleton from "src/Components/Skeleton/MoviesListSkeleton";

const Search = () => {
  const params = useParams();
  const searchMoviesList = useLoaderData();

  return (
    <>
      <Suspense fallback={<MoviesListSkeleton />}>
        <Await resolve={searchMoviesList.movies}>
          {(movies) => (
            <SearchIndex searchMoviesList={movies} params={params} />
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default Search;
