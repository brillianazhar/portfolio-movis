const MoviesListSkeleton = () => {
  return (
    <>
      <section className="pt-10 min-h-screen lg:pt-20">
        <section className="my-5 text-center">
          <h1 className="text-base lg:text-xl font-bold">Movies for you</h1>
        </section>
        <section className="flex flex-wrap justify-center gap-x-1 md:gap-x-5 xl:gap-x-10 gap-y-2 items-center px-0 lg:px-20">
          {Array.from({ length: 20 }).map((item, i) => (
            <div key={i} className="flex flex-col gap-y-1">
              <div className="skeleton w-[75px] lg:w-[200px] h-[110px] lg:h-[300px]"></div>
              <h1 className="skeleton h-4 w-3/4"></h1>
              <p className="skeleton h-2 w-1/4"></p>
            </div>
          ))}
        </section>
        <section className="mt-10 gap-y-2 flex flex-col items-center">
          <div className="join">
            <button className="join-item btn">«</button>
            <button className="join-item btn">...</button>
            <button className="join-item btn">»</button>
          </div>
          <p className="text-[10px] md:text-sm">...</p>
        </section>
      </section>
    </>
  );
};

export default MoviesListSkeleton;
