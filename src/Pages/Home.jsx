import { Suspense } from "react";
import { Await } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import HomeList from "src/Components/Home/PopularList";
import RecommendationList from "src/Components/Home/RecommendationList";
import PopularRecommendSkeleton from "src/Components/Skeleton/PopularRecommendSkeleton";

const Home = () => {
  const moviesList = useLoaderData();

  return (
    <>
      <Suspense fallback={<PopularRecommendSkeleton />}>
        <Await resolve={moviesList.popular}>
          {(popular) => <HomeList popular={popular} />}
        </Await>
        <Await resolve={moviesList.recommendation}>
          {(recommendation) => (
            <RecommendationList recommendation={recommendation} />
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default Home;
