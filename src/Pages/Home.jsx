import { Suspense } from "react";
import { Await } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import HeroBanner from "src/Components/Home/HeroBanner";
import HomeList from "src/Components/Home/PopularList";
import RecommendationList from "src/Components/Home/RecommendationList";
import PopularRecommendSkeleton from "src/Components/Skeleton/PopularRecommendSkeleton";
import { ErrorPopular, ErrorRecommendation } from "src/Utils/ErrorFetch";

const Home = () => {
  const moviesList = useLoaderData();

  return (
    <>
      <HeroBanner />
      <Suspense fallback={<PopularRecommendSkeleton />}>
        <Await resolve={moviesList.popular} errorElement={<ErrorPopular />}>
          {(popular) => <HomeList popular={popular} />}
        </Await>
        <Await
          resolve={moviesList.recommendation}
          errorElement={<ErrorRecommendation />}
        >
          {(recommendation) => (
            <RecommendationList recommendation={recommendation} />
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default Home;
