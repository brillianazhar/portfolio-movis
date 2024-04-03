import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./Pages/App";
// import Home from "./Pages/Home";
// import { MovieList } from "./Components/Home/MovieList";
// import Detail from "./Pages/Detail";
// import { DetailMovie } from "./Components/DetailMovie/DetailMovie";
// import Search from "./Pages/Search";
// import { GetSearchMovie } from "./Components/SearchMovie/SearchMovie";
// import Movies from "./Pages/Movies";
// import { DataMovies } from "./Components/Movies/Movies";
// import About from "./Pages/About";
import Error from "./Utils/Error";
// import { lazy } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        async loader() {
          let { MovieList } = await import("./Components/Home/MovieList");
          return MovieList();
        },
        async lazy() {
          let Home = await import("./Pages/Home");
          return { Component: Home.default };
        },
        // loader: MovieList,
        // element: <Home />,
      },
      {
        path: "search/:movieName/page/:page",
        async loader({ params }) {
          let { GetSearchMovie } = await import(
            "./Components/SearchMovie/SearchMovie"
          );
          return GetSearchMovie({ params });
        },
        async lazy() {
          let Search = await import("./Pages/Search");
          return { Component: Search.default };
        },
        // loader: GetSearchMovie,
        // element: <Search />,
      },
      {
        path: "movie/:movieId",
        async loader({ params }) {
          let { DetailMovie } = await import(
            "./Components/DetailMovie/DetailMovie"
          );
          return DetailMovie({ params });
        },
        async lazy() {
          let Detail = await import("./Pages/Detail");
          return { Component: Detail.default };
        },
        // loader: DetailMovie,
        // element: <Detail />,
      },
      {
        path: "movies/page/:page",
        async loader({ params }) {
          let { DataMovies } = await import("./Components/Movies/Movies");
          return DataMovies({ params });
        },
        async lazy() {
          let Movies = await import("./Pages/Movies");
          return { Component: Movies.default };
        },
        // loader: MsList,
        // element: <Movies />,
      },
      {
        path: "about",
        async lazy() {
          let About = await import("./Pages/About");
          return { Component: About.default };
        },
        // element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
