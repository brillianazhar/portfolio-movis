const DetailMovieSkeleton = () => {
  return (
    <>
      <div className={`skeleton w-full h-screen`}></div>
      <div className="p-2 flex flex-col gap-y-10">
        <section className="flex flex-col md:flex-row items-center justify-center px-0 md:px-20 pt-20">
          <div className="skeleton w-[200px] h-[300px]"></div>
          <section className="md:ml-10 md:w-3/4 lg:w-1/2 flex flex-col justify-center gap-y-2">
            <div className="flex flex-col gap-y-1">
              <div className="skeleton w-1/4 h-3 my-5 md:my-0"></div>
              <div className="skeleton w-full h-16"></div>
            </div>
            <div className="flex flex-col gap-y-1">
              <div className="skeleton w-1/2 h-3"></div>
              <div className="skeleton w-1/2 h-3"></div>
            </div>
            <div className="flex flex-col gap-y-1">
              <div className="skeleton w-1/2 h-3"></div>
              <div className="skeleton w-1/2 h-3"></div>
            </div>
            <div className="flex flex-col gap-y-1">
              <div className="skeleton w-1/2 h-3"></div>
              <div className="skeleton w-1/2 h-3"></div>
            </div>
          </section>
        </section>
        <section className="flex flex-col flex-wrap items-center gap-y-1">
          <p className="skeleton w-1/2 h-3"></p>
          <div className="skeleton w-1/2 h-8"></div>
        </section>
        <section className="flex flex-col gap-y-1">
          <p className="skeleton w-1/2 h-3"></p>
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 justify-items-center gap-x-2 gap-y-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-y-1">
                <div className="skeleton h-[200px] w-[75px] md:w-[100px] rounded-md" />
                <div className="skeleton h-1 w-[70px] md:w-20"></div>
                <div className="skeleton h-1 w-[70px] md:w-20"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailMovieSkeleton;
