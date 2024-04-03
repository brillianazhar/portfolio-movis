import { useEffect } from "react";

const AboutIndex = () => {
  useEffect(() => {
    document.title = "About - MovIs";
  }, []);
  return (
    <section className="w-full min-h-screen pt-20 flex flex-col items-center">
      <h1 className="font-bold text-xl text-white">ABOUT</h1>
      <p className="text-center mt-5">
        This website provides information about films. All data contained on
        this website is taken from{" "}
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          className="cursor-pointer underline text-blue-500 font-bold"
        >
          TheMovieDatabase
        </a>{" "}
        via API.
      </p>
      <p className="text-center">
        This website will continue to be developed to provide various
        interesting features.
      </p>
    </section>
  );
};

export default AboutIndex;
