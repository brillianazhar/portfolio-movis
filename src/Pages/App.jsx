import { Outlet } from "react-router-dom";
import Navbar from "src/Utils/Navbar";
import { ScrollRestoration } from "react-router-dom";
import Footer from "src/Utils/Footer";

const App = () => {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
