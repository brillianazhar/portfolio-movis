import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const searchRef = useRef();
  const searchRef2 = useRef();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const headerElement = useRef(null);

  useEffect(() => {
    const btnBurger = document.querySelector(".hamburger-logo");
    btnBurger.classList.contains("hamburger-active")
      ? btnBurger.classList.remove("hamburger-active")
      : btnBurger.classList.add("hamburger-active");
  }, [open]);

  const toggleMenu = () => {
    setOpen((state) => !state);
  };

  useEffect(() => {
    const changeNavbarBackground = () => {
      // const header = document.querySelector("header");
      window.scrollY > 0
        ? headerElement.current.classList.add("navbar-fixed")
        : headerElement.current.classList.remove("navbar-fixed");
    };

    window.addEventListener("scroll", changeNavbarBackground);

    return () => {
      window.removeEventListener("scroll", changeNavbarBackground);
    };
  }, []);

  const searchHandle = (e) => {
    if (!searchRef.current.value || searchRef.current.value.trim() === "")
      return;
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      navigate(`/search/${searchRef.current.value}/page/1`);
      searchRef.current.value = "";
    }
  };

  const searchHandleMobile = (e) => {
    if (!searchRef2.current.value || searchRef2.current.value.trim() === "")
      return;
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      navigate(`/search/${searchRef2.current.value}/page/1`);
      searchRef2.current.value = "";
      toggleMenu();
    }
  };

  return (
    <>
      <header
        ref={headerElement}
        className="absolute text-white left-0 top-0 z-10 flex w-full items-center justify-between bg-transparent px-4 py-1 xl:px-5"
      >
        <div className="font-bold text-base md:text-xl hover:text-blue-500">
          <Link to={"/"}>MovIs</Link>
        </div>
        <div className="flex gap-x-5 xl:gap-x-10">
          <div className="nav-menu hidden lg:flex lg:items-center">
            <ul className="flex items-center gap-x-10 font-bold">
              <li className="hover:text-blue-500">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link to={`/movies/page/1`}>Movies</Link>
              </li>
              <li className="hover:text-blue-500">
                <Link to={"/about"}>About</Link>
              </li>
            </ul>
          </div>
          <div className="text-slate-300 hidden lg:block py-1">
            <label className="input input-bordered flex items-center gap-2 rounded-full">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                ref={searchRef}
                onKeyDown={searchHandle}
              />
              <button>
                <IoIosSearch onClick={searchHandle} />
              </button>
            </label>
          </div>
          <button
            onClick={() => {
              toggleMenu();
            }}
            className="hamburger-logo hamburger-active lg:hidden"
            aria-label="mobile menu button"
          >
            <div className="hamburger-line origin-top-left transition duration-200"></div>
            <div className="hamburger-line origin-bottom-left transition duration-200"></div>
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed left-0 top-[54px] z-40 h-screen w-full origin-top bg-slate-100 text-black dark:bg-slate-800 dark:text-white">
          <div className="flex flex-col items-end gap-y-9 px-6 py-10 text-base font-bold md:text-lg">
            <div className="flex flex-col justify-center items-end gap-y-10 overflow-hidden">
              <ul className="flex flex-col justify-end items-end gap-y-10 gap-x-8">
                <li>
                  <Link to={"/"} onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={`/movies/page/1`} onClick={toggleMenu}>
                    Movies
                  </Link>
                </li>
                <li>
                  <Link to={"/about"} onClick={toggleMenu}>
                    About
                  </Link>
                </li>
              </ul>
              <label className="text-slate-300 input input-bordered flex items-center gap-2 rounded-full">
                <input
                  type="text"
                  className="grow"
                  placeholder="Search"
                  ref={searchRef2}
                  onKeyDown={searchHandleMobile}
                />
                <button>
                  <IoIosSearch onClick={searchHandleMobile} />
                </button>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* <section
        ref={headerElement}
        className="flex items-center backdrop-blur-md bg-black/30 justify-between w-full  text-white p-2 md:p-3 fixed z-10"
      >
        <div className="font-bold text-base md:text-xl">
          <Link to={"/"}>MovIs</Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-x-8">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={`/movies/page/1`}>Movies</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </div>
        <div className="text-black hidden lg:block">
          <label className="input input-bordered flex items-center gap-2 rounded-full">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              ref={searchRef}
              onKeyDown={searchHandle}
            />
            <button>
              <IoIosSearch onClick={searchHandle} />
            </button>
          </label>
        </div>
        <div className="lg:hidden">
          <p>aaa</p>
        </div>
      </section> */}
    </>
  );
};

export default Navbar;
