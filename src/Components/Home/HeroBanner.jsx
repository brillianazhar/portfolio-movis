const HeroBanner = () => {
  return (
    <div className="w-full h-screen lg:h-[500px] text-white bg-hero bg-cover bg-bottom px-10 flex flex-col gap-y-5 items-center lg:items-start justify-center">
      <p className="text-base lg:text-lg">Movie Database</p>
      <p className="text-4xl font-bold text-center lg:text-left">
        Discover The Greatest <span className="text-blue-500">MovI</span>e
        <span className="text-blue-500">s</span>
      </p>
    </div>
  );
};

export default HeroBanner;
