import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-auto">
        <img className="w-[200px]" src="/img/wire_left.png" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl">Oops!</p>
        <h1 className="font-bold text-7xl md:text-9xl text-white">404</h1>
        <p className="text-base md:text-xl">PAGE NOT FOUND</p>
        <Link to={"/"} className="mt-10">
          <div className="border-white border-2 text-white text-sm md:text-base font-bold p-1 md:p-2 rounded-md md:rounded-xl drop-shadow-sm">
            Back to Home
          </div>
        </Link>
      </div>
      <div className="w-full md:w-auto flex justify-end">
        <img className="w-[200px]" src="/img/wire_right.png" alt="" />
      </div>
    </section>
  );
};

export default Error;
