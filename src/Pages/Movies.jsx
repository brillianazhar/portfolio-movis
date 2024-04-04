import { Suspense } from "react";
import { Await } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import MoviesIndex from "src/Components/Movies/MoviesIndex";
import MoviesListSkeleton from "src/Components/Skeleton/MoviesListSkeleton";
import { ErrorListMovies } from "src/Utils/ErrorFetch";

const Movies = () => {
  const params = useParams();
  const moviesList = useLoaderData();

  return (
    <>
      <Suspense
        fallback={
          <h1 className="text-9xl">
            <MoviesListSkeleton />
          </h1>
        }
      >
        <Await
          resolve={moviesList.movies}
          errorElement={<ErrorListMovies params={params} />}
        >
          {(movies) => <MoviesIndex moviesList={movies} params={params} />}
        </Await>
      </Suspense>
    </>
  );
};

export default Movies;
