import { Suspense } from "react";
import { Await } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import BannerDetailMovie from "src/Components/DetailMovie/BannerDetailMovie";
import MoreDetailMovie from "src/Components/DetailMovie/MoreDetailMovie";
import DetailMovieSkeleton from "src/Components/Skeleton/DetailMovieSkeleton";

const Detail = () => {
  const { detail, video, credit, image } = useLoaderData();

  return (
    <>
      <Suspense fallback={<DetailMovieSkeleton />}>
        <Await resolve={detail}>
          {(detail) => (
            <>
              <Await resolve={video}>
                {(video) => <BannerDetailMovie detail={detail} video={video} />}
              </Await>
              <Await resolve={credit}>
                {(credit) => (
                  <Await resolve={image}>
                    {(image) => (
                      <MoreDetailMovie
                        detail={detail}
                        credit={credit}
                        image={image}
                      />
                    )}
                  </Await>
                )}
              </Await>
            </>
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default Detail;
