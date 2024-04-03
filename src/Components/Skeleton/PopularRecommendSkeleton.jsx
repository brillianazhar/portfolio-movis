const PopularRecommendSkeleton = () => {
  return (
    <>
      <div className="skeleton w-full h-screen lg:h-[500px]"></div>
      <section className="my-5">
        <div className="px-8 lg:px-20 py-5">
          <h1 className="text-sm lg:text-xl font-bold">Popular Movies</h1>
          <div className="w-full h-1 lg:h-2 rounded-full bg-blue-500"></div>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between gap-4 justify-items-center content-center items-center px-0 lg:px-20">
          {Array.from({ length: 12 }).map((item, i) => (
            <div className="flex flex-col gap-y-1" key={i}>
              <div className="skeleton w-[75px] lg:w-[200px] h-[110px] lg:h-[300px]"></div>
              <h1 className="skeleton h-4 w-3/4"></h1>
              <p className="skeleton h-4 w-1/4"></p>
            </div>
          ))}
        </div>
      </section>
      <section className="my-5">
        <div className="px-8 lg:px-20 py-5">
          <h1 className="text-sm lg:text-xl font-bold">Recommendation</h1>
          <div className="flex w-full items-center">
            <div className="md:basis-10/12 basis-9/12 lg:basis-11/12 w-full h-1 lg:h-2 rounded-full bg-blue-500"></div>
            <div className="text-xs lg:text-base basis-3/12 md:basis-2/12 lg:basis-1/12 px-1 text-right w-full">
              See More
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between gap-4 justify-items-center content-center items-center px-0 lg:px-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div className="flex flex-col gap-y-1" key={i}>
              <div className="skeleton w-[75px] lg:w-[200px] h-[110px] lg:h-[300px]"></div>
              <h1 className="skeleton h-4 w-3/4"></h1>
              <p className="skeleton h-4 w-1/4"></p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularRecommendSkeleton;
